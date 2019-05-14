'use strict'
import {
    EnumError,
    OCast,
    Logger,
    VideoPlaybackStatus,
    EnumMedia,
    EnumTrack
} from "https://unpkg.com/ocast-sdk";

const TAG = " [OCast Default Receiver] ";
const videoPlayer = document.getElementById('videoPlayer');
const volumeControls = document.querySelector('div.volume_controls');
const volumeBar = volumeControls.querySelector('.volume-bar');
const playerControls = document.querySelector('div.player_controls');

const progressTextLeft = document.querySelector('div.sbprogress-time.left');
const progressTextRight = document.querySelector('div.sbprogress-time.right');
const progressBar = document.querySelector('.sbprogress-bar');
let player = dashjs.MediaPlayer().create();
player.initialize();
player.attachView(videoPlayer)

const TIMER_STEP = 1000;
const DEFAULT_VOLUME = 0.5;
const OCAST_URL = 'wss://localhost:4433/ocast';
let currentVolume = DEFAULT_VOLUME;
let timer = null;
let currentMediaDuration = -1;
let currentMediaTime = 0;
let Log = Logger.getInstance();
Log.setDebugLevel(Logger.DEBUG);

initMediaPlayer();

let Ocast = {
  initCast: function (){
    let ocast = new OCast(OCAST_URL);
    ocast.debug = true;
    ocast.start();

    let mediaChannel = ocast.getMediaChannel();
    mediaChannel.addVideoMediaManager([EnumMedia.AUDIO, EnumMedia.VIDEO], videoPlayer);
    mediaChannel.setNotifier(Ocast);
  },

  onPrepare: function (url, title, subtitle, logo, mediaType, transferMode, autoplay, frequency, options) {
    Log.debug(TAG + 'onPrepare(' + url + ',' + mediaType + ',' + transferMode + ',' + autoplay + frequency +')');
    switch (mediaType) {
      case EnumMedia.VIDEO:
        Log.debug(TAG + "onLoad - play audio/video.");
        player.attachSource(url);
        player.setTextDefaultEnabled(false);
        setMediaInfoLabel(title, subtitle, logo);
        player.on(dashjs.MediaPlayer.events.PLAYBACK_STARTED, startProgressTimer);
        updateButtonPlaying();
      break;
      default :
      Log.debug(TAG + 'onPrepare; Unknown media type ('+mediaType+') => can not display player.');
        return EnumError.UNKNOWN_MEDIA_TYPE;
    }
    Log.debug(TAG + "onLoad done.");
    return ocast.EnumError.OK;
  },

  onUpdateStatus: function (playbackStatus) {
    Log.debug(TAG + ' onUpdateStatus(' + playbackStatus + ')');
    if (playbackStatus instanceof VideoPlaybackStatus) {
      return EnumError.NO_IMPLEMENTATION;
    }
  },

  onStop: function () {
    Log.debug(TAG + ' onStop');
    player.reset();
    return ocast.EnumError.OK;
  },

  onPause: function () {
    Log.debug(TAG + ' onPause');
    updateButtonPlaying();
    return ocast.EnumError.OK;
  },

  onPlay: function (position) {
    Log.debug(TAG + ' onPlay(' + position +')');
    if (position) {
      player.seek(position);
    }
    updateButtonPlaying();
    return ocast.EnumError.OK;
  },

  onResume: function () {
    Log.debug(TAG + ' onResume');
    player.play();
    updateButtonPlaying();
    return ocast.EnumError.OK;
  },

  onSeek: function (position) {
    Log.debug(TAG + ' onSeek(' + position + ')');
    return ocast.EnumError.OK;
  },

  onMute: function (mute) {
    Log.debug(TAG + ' onMute(' +  mute + ')');
    player.setMute(mute);
    displayVolumeControls();
    return ocast.EnumError.OK;
  },

  onClose: function () {
    Log.debug(TAG + ' onClose');
    player.reset();
    return ocast.EnumError.OK;
  },

  onTrack: function (type, trackId, enabled) {
    Log.debug(TAG + ' onTrack(' +  type + ',' + trackId + ',' + enabled + ')');
    if (type !== null && trackId !== null && enabled !== null) {
      if (type === EnumTrack.AUDIO || type === EnumTrack.VIDEO) {
        let currentTrack = player.getTracksFor(type)[trackId];
        if (currentTrack) {
          player.setCurrentTrack(currentTrack);
          //  player.setTrackSwitchModeFor(type,'alwaysReplace'); //neverReplace
        }
      }
      if (type === EnumTrack.TEXT) {
        player.setTextTrack(trackId);
        player.enableText(enabled);
      }
      return ocast.EnumError.OK;
    }

  },

  onVolume: function (newVolume) {
    Log.debug(TAG + ' onVolume(' + newVolume + ')');
    currentVolume = !(newVolume < 0 || newVolume > 1) ? newVolume : currentVolume;
    player.setVolume(currentVolume);
    volumeBar.style.height = currentVolume * 100 + "%";
    displayVolumeControls();
    return ocast.EnumError.OK;
  },

  onUpdateMetadata: function (e) {
    Log.debug(TAG + ' onUpdateMetadata(' + JSON.stringify(e) + ')');
    return EnumError.NO_IMPLEMENTATION;
  },

  onPlaybackStatus: function (e) {
    Log.debug(TAG + ' onPlaybackStatus(' + JSON.stringify(e) + ')');
    return EnumError.NO_IMPLEMENTATION;
  }

};

function setMediaInfoLabel(title,subtitle,thumbnail) {
  (title != null)  ? document.querySelector('.title').innerHTML =  title : '';
  (subtitle != null) ? document.querySelector('.subtitle').innerHTML =  subtitle : '';
  (thumbnail != null) ? document.querySelector('.thumbnail').setAttribute('src', thumbnail) : '';
}

function initMediaPlayer() {
  player.setVolume(currentVolume);
}

function displayPlayerControls() {
  playerControls.style.opacity = 1;
  setTimeout(hidePlayerControls, 10000);
}

function checkIfPlayerControlsIsDisplayed() {
  return playerControls.style.opacity = 0 ? true : false;
}

function displayVolumeControls() {
  volumeControls.style.opacity = 1;
  setTimeout(hideVolumeControls, 3000);
}

function hideVolumeControls(){
  volumeControls.style.opacity = 0;
}

function hidePlayerControls(){
  playerControls.style.opacity = 0;
}

function updateButtonPlaying() {
  const icon = player.isPaused() ? '►' : '❚❚';
  document.querySelector('.toggle').textContent = icon;
  displayPlayerControls();
}

function stopProgressTimer(){
  if (timer) {
    clearInterval(timer);
    timer = null;
    resetProgressBar();
  }
}

function resetProgressBar() {
  progressBar.style.width = 0 + '%';
  progressTextLeft.innerHTML = player.convertToTimeCode(0);
  progressTextRight.innerHTML = player.convertToTimeCode(0);
}

function startProgressTimer() {
  stopProgressTimer();
  timer = setInterval(incrementMediaTime, TIMER_STEP);
};

function incrementMediaTime() {
  if (!player.isPaused()) {
    currentMediaTime = player.time();
    currentMediaDuration = player.duration();
    if (currentMediaTime < currentMediaDuration) {
      currentMediaTime += 1;
      updateProgressBarByTimer();
    } else {
      endPlayback();
    }
  }
}

function updateProgressBarByTimer() {
  let percentProgress = currentMediaTime / currentMediaDuration * 100;
  progressBar.style.width = percentProgress + '%';
  progressTextLeft.innerHTML = player.convertToTimeCode(currentMediaTime);
  progressTextRight.innerHTML = player.convertToTimeCode(currentMediaDuration);
}

function endPlayback(){
  currentMediaTime = 0;
  currentMediaDuration = -1;
  stopProgressTimer();
  player.reset();
}

Object.create(Ocast).initCast();