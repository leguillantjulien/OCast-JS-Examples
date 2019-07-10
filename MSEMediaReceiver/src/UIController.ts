import { Logger } from 'ocast-sdk';

export class UIController {
  private TAG = ' [UIController] ';
  private videoElement: HTMLVideoElement = document.getElementById('videoPlayer') as HTMLVideoElement;
  private volumeControls = document.querySelector('.volume_controls') as HTMLElement;
  private volumeBar = document.getElementById('volume-bar') as HTMLInputElement;
  private playerControls = document.querySelector('.player_controls') as HTMLElement;
  private progressTextLeft = document.querySelector('.sbprogress-time.left') as HTMLElement;
  private progressTextRight = document.querySelector('.sbprogress-time.right') as HTMLElement;
  private progressBar = document.querySelector('.sbprogress-bar') as HTMLElement;
  private loadingAnimation = document.querySelector('.loading_anim') as HTMLElement;
  private btnPlay = document.getElementById('play_btn') as HTMLElement;
  private titleElement = document.querySelector('.title') as HTMLElement;
  private subtitleElement = document.querySelector('.subtitle') as HTMLElement;
  private thumbnailElement = document.querySelector('.thumbnail') as HTMLElement;
  private logger = Logger.getInstance();
  private timer: number | null;
  private TIMER_STEP: number = 1000;
  private currentMediaDuration: number = -1;
  private currentMediaTime: number = 0;

  //  UI EventListener

  public onPlaying = () => {
    this.logger.info(this.TAG + '<video> onPlaying');
    this.updateButtonPlaying();
    this.hideLoadingAnimation();
    this.displayBtnPlayDiv(false);
    this.displayPlayerControls(false);
  }

  public onPause = () => {
    this.logger.info(this.TAG + '<video> onPause');
    this.updateButtonPlaying();
    this.displayBtnPlayDiv(true);
    this.displayPlayerControls(true);
  }

  public onWaiting = () => {
    this.logger.info(this.TAG + '<video> onWaiting');
    this.displayLoadingAnimation();
  }

  public onStop = () => {
    this.logger.info(this.TAG + '<video> onStop');
  }

  public onVolumeChange = () => {
    this.logger.info(this.TAG + '<video> onVolumeChange');
    this.setVolumeBarValue((this.videoElement.volume * 100).toString());
    this.displayVolumeControls();
  }

  public onEnd = () => {
    this.logger.info(this.TAG + '<video> onEnd');
    this.stopProgressTimer();
    this.endPlayback();
    this.hideInterface();
  }

  public onSeeked = () => {
    this.logger.info(this.TAG + '<video> onSeeked');
    this.hidePlayerControls();
  }

  public onSeeking = () => {
    this.logger.info(this.TAG + '<video> onSeeking');
    this.displayPlayerControls(true);
  }

  public onLoadedMetadata = (mediaInfo: any) => {
    this.logger.info(this.TAG + '<video> onLoadedMetadata');
    this.setMediaInfoLabel(mediaInfo.title, mediaInfo.subtitle, mediaInfo.logo);
    try {
      this.startProgressTimer();
    } catch (err) {
      this.logger.info(this.TAG + 'err ' + err);
    }
  }

  // Edit UI

  public setMediaInfoLabel(title: string, subtitle: string, logo: string) {
    if (title !== null) {
      this.titleElement.innerHTML = title;
    }
    if (subtitle !== null) {
      this.subtitleElement.innerHTML = subtitle;
    }
    if (logo !== null) {
      this.thumbnailElement.setAttribute('src', logo);
    }
  }

  public setVolumeBarValue(newValue) {
    this.volumeBar.value = newValue;
  }

  //  display/hide div

  public displayBtnPlayDiv(fix: boolean, duration?: number) {
    this.btnPlay.style.opacity = '1';
    if (!fix) {
      setTimeout(() => { this.hideBtnPlayDiv(); }, duration ? duration : 2000, this);
    }
  }

  public displayPlayerControls(fix: boolean, duration?: number) {
    this.playerControls.style.opacity = '1';
    if (!fix) {
      setTimeout(() => { this.hidePlayerControls(); }, duration ? duration : 5000, this);
    }
  }

  public displayVolumeControls() {
    this.volumeControls.style.opacity = '1';
    setTimeout(() => { this.hideVolumeControls(); }, 2000, this);
  }

  public displayLoadingAnimation() {
    this.loadingAnimation.style.opacity = '1';
  }

  public hideLoadingAnimation() {
    this.loadingAnimation.style.opacity = '0';
  }

  public hideBtnPlayDiv() {
    this.btnPlay.style.opacity = '0';
  }

  public hideVolumeControls() {
    this.volumeControls.style.opacity = '0';
  }

  public hidePlayerControls() {
    this.playerControls.style.opacity = '0';
  }

  public hideInterface() {
    this.hidePlayerControls();
    this.hideVolumeControls();
    this.hideBtnPlayDiv();
  }

  public updateButtonPlaying() {
    const icon = this.videoElement.paused ? '►' : 'Ⅱ';
    const toggle = document.querySelector('.toggle') as HTMLElement;
    toggle.textContent = icon;
  }

  public endPlayback() {
    this.currentMediaTime = 0;
    this.currentMediaDuration = -1;
    this.stopProgressTimer();
  }

  //  Progress Bar

  public resetProgressBar() {
    this.progressBar.style.width = 0 + '%';
    this.progressTextLeft.innerHTML = this.convertToTimeCode(0);
    this.progressTextRight.innerHTML = this.convertToTimeCode(0);
  }

  public convertToTimeCode(seconds: number) {
    try {
      const date = new Date(0);
      date.setSeconds(seconds);
      return date.toISOString().substr(11, 8);
    } catch (error) {
      return '--:--:--';  //  live streaming
    }
  }

  public startProgressTimer() {
    this.stopProgressTimer();
    this.timer = window.setInterval(() => { this.incrementMediaTime(); }, this.TIMER_STEP, this);
  }

  public stopProgressTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
      this.resetProgressBar();
    }
  }

  public incrementMediaTime() {
    if (!this.videoElement.paused) {
      this.currentMediaTime = this.videoElement.currentTime;
      this.currentMediaDuration = this.videoElement.duration;
      if (this.currentMediaTime < this.currentMediaDuration) {
        this.currentMediaTime += 1;
        this.updateProgressBarByTimer();
      } else {
        this.endPlayback();
      }
    }
  }

  public updateProgressBarByTimer() {
    const percentProgress = this.currentMediaTime / this.currentMediaDuration * 100;
    this.progressBar.style.width = percentProgress + '%';
    this.progressTextLeft.innerHTML = this.convertToTimeCode(this.currentMediaTime);
    this.progressTextRight.innerHTML = this.convertToTimeCode(this.currentMediaDuration);
  }

}
