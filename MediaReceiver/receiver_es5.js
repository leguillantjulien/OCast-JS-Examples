/*global  ocast*/
'use strict';
const TAG = ' [OCast Receiver] ';
const TIMER_STEP = 1000;
const OCAST_URL = 'wss://localhost:4433/ocast';
let playerState = ocast.EnumMediaStatus.IDLE;
let timer = null;
let currentMediaDuration = -1;
let currentMediaTime = 0;
let mediaInfo = {};

const videoElement = document.getElementById('videoPlayer');
const volumeControls = document.querySelector('.volume_controls');
const volumeBar = document.getElementById('volume-bar');
const playerControls = document.querySelector('.player_controls');
const progressTextLeft = document.querySelector('.sbprogress-time.left');
const progressTextRight = document.querySelector('.sbprogress-time.right');
const progressBar = document.querySelector('.sbprogress-bar');
const btnPlay = document.getElementById('play_btn');
const titleElement = document.querySelector('.title');
const subtitleElement = document.querySelector('.subtitle');
const thumbnailElement = document.querySelector('.thumbnail');
const loadingAnimation = document.querySelector('.loading_anim');

//  init ocast
let _ocast = new ocast.OCast(OCAST_URL);
_ocast.debug = false;
_ocast.start();
let Log = ocast.Logger.getInstance();
let mediaChannel = _ocast.getMediaChannel();
mediaChannel.addVideoMediaManager([ocast.EnumMedia.AUDIO, ocast.EnumMedia.VIDEO], videoElement);
mediaChannel.setNotifier(this);

//  init eventListener
videoElement.addEventListener('playing', onPlaying);
videoElement.addEventListener('waiting', onWaiting);
videoElement.addEventListener('stop', onStop);
videoElement.addEventListener('ended', onEnd);
videoElement.addEventListener('pause', onPause);
videoElement.addEventListener('onvolumechange', onVolumeChange);
videoElement.addEventListener('seeking', onSeeking);
videoElement.addEventListener('seeked', onSeeked);
videoElement.addEventListener('loadedmetadata', onLoadedMetadata);

/** OCast method */

this.onPrepare = function (url, title, subtitle, logo, mediaType, transferMode, autoplay, frequency) {
  Log.info(TAG + 'onPrepare(' + url + ',' + mediaType + ',' + transferMode + ',' + autoplay + ',' + frequency + ')');
  switch (mediaType) {
  case ocast.EnumMedia.VIDEO:
    Log.debug(TAG + 'onLoad - play audio/video.');
    playerState = ocast.EnumMediaStatus.BUFFERING;
    mediaInfo = { title, subtitle, logo };
    Log.info(TAG + 'onLoad done.');
    return ocast.EnumError.OK;
    break;
  default:
    Log.debug(TAG + 'onPrepare; Unknown media type (' + mediaType + ') => can not display player.');
    return ocast.EnumError.UNKNOWN_MEDIA_TYPE;
  }
};

this.onUpdateStatus = function (playbackStatus) {
  Log.debug(TAG + ' onUpdateStatus(' + playbackStatus + ')');
  // not impl
  return ocast.EnumError.OK;
};

this.onStop = function () {
  Log.debug(TAG + ' onStop');
  player.reset();
  return ocast.EnumError.OK;
};

this.onPause = function () {
  Log.debug(TAG + ' onPause');
  return ocast.EnumError.OK;
};

this.onPlay = function (position) {
  Log.debug(TAG + ' onPlay(' + position + ')');
  if (position !== null) {
    videoElement.currentTime = position;
  }
  return ocast.EnumError.OK;
};

this.onResume = function () {
  Log.debug(TAG + ' onResume');
  return ocast.EnumError.OK;
};

this.onSeek = function (position) {
  Log.debug(TAG + ' onSeek(' + position + ')');
  return ocast.EnumError.OK;
};

this.onMute = function (mute) {
  Log.debug(TAG + ' onMute(' + mute + ')');
  return ocast.EnumError.OK;
};

this.onClose = function () {
  Log.debug(TAG + ' onClose');
  return ocast.EnumError.OK;
};

this.onTrack = function (type, trackId, enabled) {
  Log.debug(TAG + ' onTrack(' + type + ',' + trackId + ',' + enabled + ')');
  return ocast.EnumError.OK;
};

this.onVolume = function (newVolume) {
  Log.debug(TAG + ' onVolume(' + newVolume + ')');
  return ocast.EnumError.OK;
};

//  UI
function onLoadedMetadata() {
  Log.info('<video> onLoadedMetadata');
  setMediaInfoLabel(mediaInfo.title,mediaInfo.subtitle,mediaInfo.logo);
  startProgressTimer();
}

function onPlaying() {
  Log.info('<video> onPlaying');
  playerState = ocast.EnumMediaStatus.PLAYING;
  updateButtonPlaying();
  hideLoadingAnimation();
  displayBtnPlayDiv(false);
  displayPlayerControls(false);
}

function onPause() {
  Log.info('<video> onPause');
  playerState = ocast.EnumMediaStatus.PAUSED;
  updateButtonPlaying();
  displayBtnPlayDiv(true);
  displayPlayerControls(true);
}

function onWaiting() {
  Log.info('<video> onWaiting');
  displayLoadingAnimation();
}

function onStop() {
  Log.info('<video> onStop');
}

function onVolumeChange() {
  Log.info('<video> onVolumeChange');
  console.log('videoElement.volume * 100 ' + videoElement.volume * 100);
  setVolumeBarValue((videoElement.volume * 100).toString());
  displayVolumeControls();
}

function onEnd() {
  Log.info('<video> onEnd');
  playerState = ocast.EnumMediaStatus.IDLE;
  stopProgressTimer();
  endPlayback();
  hideInterface();
}

function onSeeked() {
  Log.info('<video> onSeeked');
  hidePlayerControls();
}

function onSeeking() {
  Log.info('<video> onSeeking');
  displayPlayerControls(true);
}

function hideInterface () {
  hidePlayerControls();
  hideVolumeControls();
  hideBtnPlayDiv();
}

function setMediaInfoLabel(title,subtitle,logo) {
  if (title !== null) {
    titleElement.innerHTML = title;
  }
  if (subtitle !== null) {
    subtitleElement.innerHTML = subtitle;
  }
  if (logo !== null) {
    thumbnailElement.setAttribute('src', logo);
  }
}

//  display/hide div

function displayBtnPlayDiv (fix,duration) {
  btnPlay.style.opacity = '1';
  if (!fix) {
    setTimeout(hideBtnPlayDiv, duration ? duration : 2000);
  }
}

function displayPlayerControls(fix,duration) {
  playerControls.style.opacity = '1';
  if (!fix) {
    setTimeout(hidePlayerControls, duration ? duration : 4000);
  }
}

function displayVolumeControls() {
  volumeControls.style.opacity = '1';
  setTimeout(hideVolumeControls, 3000);
}

function displayLoadingAnimation() {
  console.log('displayLoadingAnimation');
  loadingAnimation.style.opacity = '1';
}

function hideLoadingAnimation() {
  loadingAnimation.style.opacity = '0';
}

function hideBtnPlayDiv () {
  btnPlay.style.opacity = '0';
}

function hideVolumeControls(){
  volumeControls.style.opacity = '0';
}

function hidePlayerControls(){
  playerControls.style.opacity = '0';
}

function setVolumeBarValue(newValue) {
  volumeBar.value = newValue;
}

function updateButtonPlaying() {
  const icon = videoElement.paused ? '►' : 'Ⅱ';
  let toggle = document.querySelector('.toggle');
  toggle.textContent = icon;
}

//  Progress bar

function resetProgressBar() {
  progressBar.style.width = 0 + '%';
  progressTextLeft.innerHTML = convertToTimeCode(0);
  progressTextRight.innerHTML = convertToTimeCode(0);
}

function convertToTimeCode (seconds) {
  try {
    let date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
  } catch (error) {
    return '--:--:--';
  }
}

function startProgressTimer() {
  stopProgressTimer();
  timer = setInterval(incrementMediaTime, TIMER_STEP);
}

function stopProgressTimer(){
  if (timer) {
    clearInterval(timer);
    timer = null;
    resetProgressBar();
  }
}

function incrementMediaTime() {
  if (playerState === ocast.EnumMediaStatus.PLAYING) {
    currentMediaTime = videoElement.currentTime;
    currentMediaDuration = videoElement.duration;
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
  progressTextLeft.innerHTML = convertToTimeCode(currentMediaTime);
  progressTextRight.innerHTML = convertToTimeCode(currentMediaDuration);
}

function endPlayback(){
  currentMediaTime = 0;
  currentMediaDuration = -1;
  mediaInfo = {};
  stopProgressTimer();
  videoElement.stop;
}
