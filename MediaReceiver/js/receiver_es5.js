
'use strict'
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
const Log = ocast.Logger.getInstance();

let playerState = ocast.EnumMediaStatus.IDLE;
let currentVolume = DEFAULT_VOLUME;
let timer = null;
let currentMediaDuration = -1;
let currentMediaTime = 0;
Log.setDebugLevel(ocast.Logger.DEBUG);

let _ocast = new ocast.OCast(OCAST_URL);
_ocast.debug = true;
_ocast.start();

let mediaChannel = _ocast.getMediaChannel();
mediaChannel.addVideoMediaManager([ocast.EnumMedia.AUDIO, ocast.EnumMedia.VIDEO], videoPlayer);
videoPlayer.volume = currentVolume;
mediaChannel.setNotifier(this);

this.onPrepare = function (url, title, subtitle, logo, mediaType, transferMode, autoplay, frequency, options) {
  Log.debug(TAG + 'onPrepare(' + url + ',' + mediaType+ ',' +transferMode + ',' + autoplay + frequency +')');
  switch (mediaType) {
    case ocast.EnumMedia.VIDEO:
    Log.debug(TAG + "onLoad - play audio/video.");
    setMediaInfoLabel(title, subtitle, logo);
    playerState = ocast.EnumMediaStatus.BUFFERING;
    videoPlayer.addEventListener('loadeddata', startProgressTimer);
    updateButtonPlaying();
    displayPlayerControls();
    break;
    default :
    console.error(TAG + 'onPrepare; Unknown media type ('+mediaType+') => can not display player.');
    return EnumError.UNKNOWN_MEDIA_TYPE;
  }
  Log.debug(TAG + "onLoad done.");
  return ocast.EnumError.OK;
}

this.onUpdateStatus = function (playbackStatus) {
  Log.debug(TAG + " onUpdateStatus(", JSON.stringify(playbackStatus) + ')');
  if (playbackStatus instanceof ocast.VideoPlaybackStatus) {
    switch (playbackStatus.status) {
      case ocast.EnumMediaStatus.ERROR:
      Log.debug(TAG + " onError");
      break;
      case ocast.EnumMediaStatus.BUFFERING:
      Log.debug(TAG + " onBuffering");
      default:
    }
    return ocast.EnumError.OK;
  }
}

this.onStop = function () {
  Log.debug(TAG + ' onStop');
  playerState = ocast.EnumMediaStatus.IDLE;
  updateButtonPlaying();
  return ocast.EnumError.OK;
}

this.onPause = function () {
  Log.debug(TAG + ' onPause');
  playerState = ocast.EnumMediaStatus.PAUSED;
  updateButtonPlaying();
  return ocast.EnumError.OK;
}

this.onPlay = function (position) {
  Log.debug(TAG + ' onPlay(' + position +')');
  if (position) {
    videoPlayer.currentTime = position;
  }
  playerState = ocast.EnumMediaStatus.PLAYING;
  updateButtonPlaying();
  return ocast.EnumError.OK;
}

this.onResume = function () {
  Log.debug(TAG + ' onResume');
  playerState = ocast.EnumMediaStatus.PLAYING;
  updateButtonPlaying();
  return ocast.EnumError.OK;
}

this.onSeek = function (position) {
  Log.debug(TAG + ' onSeek(' + position + ')');
  return ocast.EnumError.OK;
}

this.onMute = function (mute) {
  Log.debug(TAG + ' onMute(' +  mute + ')');
  displayVolumeControls();
  return ocast.EnumError.OK;
}

this.onClose = function () {
  Log.debug(TAG + ' onClose');
  playerState = ocast.EnumMediaStatus.IDLE;
  videoPlayer.stop();
  return ocast.EnumError.OK;
}

this.onTrack = function (type, trackId, enabled) {
  Log.debug(TAG + ' onTrack(' + type + ',' + trackId + ',' + enabled + ')');
  return ocast.EnumError.OK;
}

this.onVolume = function (newVolume) {
  Log.debug(TAG + ' onVolume(' + newVolume + ')');
  currentVolume = !(newVolume < 0 || newVolume > 1) ? newVolume : currentVolume;
  volumeBar.style.height = currentVolume * 100 + "%";
  displayVolumeControls();
  return ocast.EnumError.OK;
}

this.onUpdateStatus = function (e) {
  Log.debug(TAG + ' onUpdateStatus(' + JSON.stringify(e) + ')');
  return ocast.EnumError.OK;
}

this.onUpdateMetadata = function (e) {
  Log.debug(TAG + ' onUpdateMetadata(' + JSON.stringify(e) + ')');
  return ocast.EnumError.OK;
}

this.onPlaybackStatus = function (e) {
  Log.debug(TAG + ' onPlaybackStatus(' + JSON.stringify(e) + ')');
  return ocast.EnumError.OK;
}

function setMediaInfoLabel(title,subtitle,thumbnail) {
  (title != null)  ? document.querySelector('.title').innerHTML =  title : '';
  (subtitle != null) ? document.querySelector('.subtitle').innerHTML =  subtitle : '';
  (thumbnail != null) ? document.querySelector('.thumbnail').setAttribute('src', thumbnail) : '';
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
  if (!checkIfPlayerControlsIsDisplayed()){
    displayPlayerControls();
  };
  const icon = (playerState === ocast.EnumMediaStatus.PAUSED) ? '►' : '❚❚';
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
  if (playerState === ocast.EnumMediaStatus.PLAYING) {
    currentMediaTime = videoPlayer.currentTime;
    currentMediaDuration = videoPlayer.duration;
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
  playerState = ocast.EnumMediaStatus.IDLE;
  stopProgressTimer();
}
