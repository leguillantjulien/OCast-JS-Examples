
'use strict'
import {
  EnumError,
  OCast,
  Logger,
  VideoPlaybackStatus,
  EnumMedia,
  EnumMediaStatus
} from "https://unpkg.com/ocast-sdk";

const TAG = " [Ocast Default Receiver] ";
const videoPlayer = document.getElementById('videoPlayer');
const volumeControls = document.querySelector('div.volume_controls');
const volumeBar = volumeControls.querySelector('.volume-bar');
const playerControls = document.querySelector('div.player_controls');

const progressTextLeft = document.querySelector('div.sbprogress-time.left');
const progressTextRight = document.querySelector('div.sbprogress-time.right');
const progressBar = document.querySelector('.sbprogress-bar');

const TIMER_STEP = 1000;
const DEFAULT_VOLUME = 0.5;
const OCAST_URL = 'wss://localhost:4433/ocast';
const Log = Logger.getInstance();

let playerState = EnumMediaStatus.IDLE;
let currentVolume = DEFAULT_VOLUME;
let timer = null;
let currentMediaDuration = -1;
let currentMediaTime = 0;
Log.setDebugLevel(Logger.DEBUG);

let Ocast = {
  initCast: function (){
    let ocast = new OCast(OCAST_URL);
    ocast.debug = true;
    ocast.start();

    let mediaChannel = _getMediaChannel();
    mediaChannel.addVideoMediaManager([EnumMedia.AUDIO, EnumMedia.VIDEO], videoPlayer);
    videoPlayer.volume = currentVolume;
    mediaChannel.setNotifier(Ocast);
  },

  onPrepare: function (url, title, subtitle, logo, mediaType, transferMode, autoplay, frequency, options) {
    Log.debug(TAG + 'onPrepare(' + url + ',' + mediaType+ ',' +transferMode + ',' + autoplay + frequency +')');
    switch (mediaType) {
      case EnumMedia.VIDEO:
      Log.debug(TAG + "onLoad - play audio/video.");
      setMediaInfoLabel(title, subtitle, logo);
      playerState = EnumMediaStatus.BUFFERING;
      videoPlayer.addEventListener('loadeddata', startProgressTimer);
      updateButtonPlaying();
      displayPlayerControls();
      break;
      default :
      console.error(TAG + 'onPrepare; Unknown media type ('+mediaType+') => can not display player.');
      return EnumError.UNKNOWN_MEDIA_TYPE;
    }
    Log.debug(TAG + "onLoad done.");
  },

  onUpdateStatus: function (playbackStatus) {
    Log.debug(TAG + " onUpdateStatus(", JSON.stringify(playbackStatus) + ')');
    if (playbackStatus instanceof VideoPlaybackStatus) {
      switch (playbackStatus.status) {
        case EnumMediaStatus.ERROR:
        Log.debug(TAG + " onError");
        break;
        case EnumMediaStatus.BUFFERING:
        Log.debug(TAG + " onBuffering");
        default:
      }
    }
  },

  onStop: function () {
    Log.debug(TAG + ' onStop');
    playerState = EnumMediaStatus.IDLE;
    updateButtonPlaying();
  },

  onPause: function () {
    Log.debug(TAG + ' onPause');
    playerState = EnumMediaStatus.PAUSED;
    updateButtonPlaying();
  },

  onPlay: function (position) {
    Log.debug(TAG + ' onPlay(' + position +')');
    if (position) {
      videoPlayer.currentTime = position;
    }
    playerState = EnumMediaStatus.PLAYING;
    updateButtonPlaying();
  },

  onResume: function () {
    Log.debug(TAG + ' onResume');
    playerState = EnumMediaStatus.PLAYING;
    updateButtonPlaying();
  },

  onSeek: function (position) {
    Log.debug(TAG + ' onSeek(' +  position + ')');
  },

  onMute: function (mute) {
    Log.debug(TAG + ' onMute(' +  mute + ')');
    displayVolumeControls();
  },

  onClose: function () {
    Log.debug(TAG + ' onClose');
    playerState = EnumMediaStatus.IDLE;
    videoPlayer.stop();
  },

  onTrack: function (type, trackId, enabled) {
    Log.debug(TAG + ' onTrack(' +  type + ',' + trackId + ',' + enabled + ')');
  },

  onVolume: function (newVolume) {
    Log.debug(TAG + ' onVolume(' + newVolume + ')');
    currentVolume = !(newVolume < 0 || newVolume > 1) ? newVolume : currentVolume;
    volumeBar.style.height = currentVolume * 100 + "%";
    displayVolumeControls();
  },

  onUpdateMetadata: function (e) {
    Log.debug(TAG + ' onUpdateMetadata(' + JSON.stringify(e) + ')');
  },

  onPlaybackStatus: function (e) {
    Log.debug(TAG + ' onPlaybackStatus(' + JSON.stringify(e) + ')');
  }
};

function setMediaInfoLabel(title,subtitle,thumbnail) {
  (title != null)  ? document.querySelector('.title').innerHTML =  title : '';
  (subtitle != null) ? document.querySelector('.subtitle').innerHTML =  subtitle : '';
  (thumbnail != null) ? document.querySelector('.thumbnail').setAttribute('src', thumbnail) : '';
}

function displayPlayerControls() {
  playerControls.style.opacity = 1;
  setTimeout(hidePlayerControls, 6000);
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
  if (!checkIfPlayerControlsIsDisplayed()){
    displayPlayerControls();
  };
  const icon = (playerState === EnumMediaStatus.PAUSED) ? '►' : '❚❚';
  document.querySelector('.toggle').textContent = icon;
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
  progressTextLeft.innerHTML = convertSecondToHourFormat(0);
  progressTextRight.innerHTML = convertSecondToHourFormat(0);
}

function startProgressTimer() {
  stopProgressTimer();
  timer = setInterval(incrementMediaTime, TIMER_STEP);
};

function incrementMediaTime() {
  currentMediaTime = videoPlayer.currentTime;
  currentMediaDuration = videoPlayer.duration;

  if (playerState === EnumMediaStatus.PLAYING) {
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
  progressTextLeft.innerHTML = convertSecondToHourFormat(currentMediaTime);
  progressTextRight.innerHTML = convertSecondToHourFormat(currentMediaDuration);
}

function convertSecondToHourFormat(seconds){
  let date = new Date(null);
  date.setSeconds(seconds);
  return date.toISOString().substr(11, 8);
}

function endPlayback(){
  currentMediaTime = 0;
  currentMediaDuration = -1;
  playerState = EnumMediaStatus.IDLE;
  stopProgressTimer();
}

Object.create(Ocast).initCast();
