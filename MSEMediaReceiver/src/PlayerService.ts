import dashjs from 'dashjs';
import { EnumMedia, EnumTrack, Logger } from 'ocast-sdk';
import { UIController } from './UIController';

export class PlayerService {
  private TAG = ' [PlayerService] ';
  private videoElement = document.querySelector('#videoPlayer') as HTMLVideoElement;
  private ttlTag = document.querySelector('.ttl') as HTMLDivElement;
  private videoPlayer: any;
  private initialPlayback: boolean = false;
  private playerReady: boolean = false;
  private firstDashPlayerCreation: boolean = true;
  private uiController: UIController;
  private logger = Logger.getInstance();
  private mediaInfo = {};

  public init() {
    this.playerReady = false;
    return this.start().then(() => {
      this.playerReady = true;
      this.initialPlayback = true;
      return Promise.resolve();
    });
  }

    /**
   * Prepare to load a new stream
   * @param url Url of the stream
   * @param title Title of the stream
   * @param subtitle Subtitle of the stream
   * @param logo  Logo of the stream
   * @param mediaType  Mediatype of the stream
   * @param autoplay
   */
  public prepare(url: string, title: string, subtitle: string, logo: string, mediaType: EnumMedia, autoplay: boolean) {
    switch (mediaType) {
      case EnumMedia.AUDIO:
        this.logger.info(this.TAG + 'onLoad - audio.');
        this.videoPlayer.attachSource(url);
        this.videoPlayer.setAutoPlay(autoplay);
        this.mediaInfo = { title, subtitle, logo };
        return Promise.resolve(true);
      case EnumMedia.VIDEO:
        this.logger.info(this.TAG + 'onLoad - video.');
        this.videoPlayer.attachSource(url);
        this.videoPlayer.setAutoPlay(autoplay);
        this.mediaInfo = { title, subtitle, logo };
        this.logger.info(this.TAG + 'onLoad done.');
        return Promise.resolve(true);
      default:
        this.logger.info(this.TAG + 'onPrepare; Unknown media type(' +
          mediaType + ') => can not display  this.player.');
        return Promise.resolve(false);
    }
  }

  /**
   * edit the current time position
   * @param position New video position
   */
  public seek(position: number) {
    if (position != null && position < this.videoElement.duration) {
      this.videoElement.currentTime = position;
    }
  }

  /**
   * select a track by type and id
   * @param type Type of the requested track
   * @param id Id of the track
   */
  public selectTrackForType(type: string, id: string) {
    return this.videoPlayer.selectTrackForType(type, id);
  }

    /**
   * set a Track
   * @param type Type of the loaded track
   * @param trackId Id of the track
   * @param enabled enabled or disabled the track
   */
  public setTrack(type: EnumTrack, trackId: string, enabled: boolean) {
    if (type !== null && trackId !== null && enabled !== null) {
      if (type === EnumTrack.AUDIO || type === EnumTrack.VIDEO) {
        const currentTrack = this.videoPlayer.getTracksFor(type)[trackId];
        if (currentTrack) {
          this.videoPlayer.setCurrentTrack(currentTrack);
        }
      }
      if (type === EnumTrack.TEXT) {
        this.videoPlayer.setTextTrack(trackId);
        this.videoPlayer.enableText(enabled);
      }
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
    }
  }

  /**
   * Change volume
   * @param volume New volume value
   * @param forceVolume Force new value(remove mute if necessary AND set volume, else not set value if mute)
   */
  public setVolume(volume: number, forceVolume?: boolean): void {
    if (volume > 100) {
      volume = 100;
    } else if (volume < 0) {
      volume = 0;
    }
    if (volume === 0) {
      this.setMute(true);
    } else {
      if (this.isMute()) {
        this.setMute(false);
        if (!forceVolume) {
          return;
        }
      }
      this.videoElement.volume = volume / 100;
    }
  }

    /**
   * Stop stream if it's playing
   */
  public stop(): Promise<void> {
    if (!this.playerReady) {
      return Promise.resolve();
    }
    return this.start().then(() => {
      this.videoPlayer.stop();
      this.playerReady = true;
    });
  }

  /**
   * Mute or un Mute current stream
   *  @param isMuted
   */
  public mute(isMuted: boolean): void {
    this.videoElement.muted = isMuted;
  }

  /**
 * Pause the current stream
 */
  public pause(): void {
    this.videoPlayer.pause();
  }
  /**
 * Play the current stream
 */
  public play(): void {
    this.videoPlayer.play();
  }

  private setMute(mute: boolean): void {
    this.videoElement.muted = mute;
  }

  private isMute(): boolean {
    return this.videoElement.muted;
  }

  private start(): Promise<void> {
    if (this.playerReady) {
      return Promise.resolve();
    }
    if (this.firstDashPlayerCreation) {
      this.uiController = new UIController();
      this.videoPlayer = dashjs.MediaPlayer().create();
      this.videoPlayer.initialize();
      this.videoPlayer.attachView(this.videoElement);
      this.videoPlayer.attachTTMLRenderingDiv(this.ttlTag);
      this.videoPlayer.setTextDefaultEnabled(false);

      this.videoElement.addEventListener('playing', () => {
        this.uiController.onPlaying();
        this.onPlaying();
      });

      this.videoElement.addEventListener('loadedmetadata', () => this.uiController.onLoadedMetadata(this.mediaInfo));

      this.videoElement.addEventListener('waiting', () => {
        this.uiController.onWaiting();
        this.onWaiting();
      });
      this.videoElement.addEventListener('stop', this.onStop);

      this.videoElement.addEventListener('ended', () => {
        this.uiController.onEnd();
        this.onEnd();
      });

      this.videoElement.addEventListener('pause', this.uiController.onPause);

      this.videoElement.addEventListener('volumechange', this.uiController.onVolumeChange);

      this.videoElement.addEventListener('seeking', this.uiController.onSeeking);
      this.videoElement.addEventListener('seeked', this.uiController.onSeeked);

      this.firstDashPlayerCreation = false;
    }
    return Promise.resolve();
  }

  private onPlaying = () => {
    this.logger.info('<video> onPlaying');
    this.playerReady = true;
    if (this.initialPlayback) {
      this.initialPlayback = false;
      if ((this.videoPlayer.duration() - this.videoPlayer.time()) > 15) {
        this.videoPlayer.seek(this.videoPlayer.time() + 0.001);
      }
    }
  }

  private onWaiting = () => {
    this.logger.info('<video> waiting');
  }

  private onStop = () => {
    this.logger.info('<video> stop');
    this.videoElement.src = '';
  }

  private onEnd = () => {
    this.logger.info('<video> end');
    this.videoElement.src = '';
  }

}
