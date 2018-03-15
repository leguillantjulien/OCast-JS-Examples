import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {
  Channel,
  EnumError,
  EnumMedia,
  EnumMediaStatus,
  Logger,
  MediaChannel,
  OCast,
  VideoPlaybackStatus
} from "ocast-sdk/src";
import {NotifierService} from "../service/notifier";


const TAG: string = " [OCast Default Receiver] ";
const CUSTOM_NAMESPACE: string = "urn:x-cast:sample";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('visibilityOsd', [
      state('shown', style({opacity: 1})),
      state('hidden', style({opacity: 0})),
      transition('hidden => shown', animate('300ms ease-in')),
      transition('shown => hidden', animate('1000ms ease-out'))
    ]),
    trigger('visibilityVolume', [
      state('shown', style({opacity: 1})),
      state('hidden', style({opacity: 0})),
      transition('hidden => shown', animate('300ms ease-in')),
      transition('shown => hidden', animate('1000ms ease-out'))
    ]),
    trigger('visibilityPause', [
      state('shown', style({opacity: 1})),
      state('hidden', style({opacity: 0})),
      transition('hidden => shown', animate('300ms ease-in')),
      transition('shown => hidden', animate('1000ms ease-out'))
    ]),
    trigger('visibilityBuffering', [
      state('shown', style({opacity: 1})),
      state('hidden', style({opacity: 0})),
      transition('hidden => shown', animate('300ms ease-in')),
      transition('shown => hidden', animate('1000ms ease-out'))
    ]),
    trigger('visibilityMute', [
      state('shown', style({opacity: 1})),
      state('hidden', style({opacity: 0})),
      transition('hidden => shown', animate('300ms ease-in')),
      transition('shown => hidden', animate('1000ms ease-out'))
    ])
  ]
})
export class AppComponent implements OnInit {

  //Ready container
  @ViewChild("readyContainer") readyContainer: ElementRef;
  readyContainerHidden: Boolean = false;

  //video
  @ViewChild("playerContainer") playerContainer: ElementRef;
  playerContainerHidden: boolean = true;
  @ViewChild("media") media: ElementRef;
  @ViewChild("state") state: ElementRef;

  title: string;
  subtitle: string;
  logo: string;
  thumbnail: string;
  volume: number;

  currentTime: string = "--:--:--";
  duration: string = "--:--:--";

  @ViewChild("imageContainer") imageContainer: ElementRef;
  imageContainerHidden: boolean = true;
  @ViewChild("image") image: ElementRef;

  @ViewChild("errorContainer") errorContainer: ElementRef;
  errorContainerHidden: boolean = true;

  currentContainer: any;

  private ocast: OCast;
  private logger: Logger;
  private customChannel: Channel;
  private mediaChannel: MediaChannel;

  osdTimeout: any;
  volumeTimeout: any;
  visibilityOsd = 'hidden';
  visibilityVolume = 'hidden';
  visibilityPause = "hidden";
  visibilityBuffering = "hidden";
  visibilityMute = "hidden";
  isLive: boolean = false;
  timeTotal: string;
  timeCurrent: string;
  playbackPositionPercent: number = 0;


  constructor(private notifierService: NotifierService) {
    this.logger = Logger.getInstance()
    this.logger.setDebugLevel(Logger.DEBUG);
    this.ocast = new OCast();
    this.ocast.debug = true;
    // Start Websocket
    this.ocast.start();
  }

  ngOnInit() {
    // Get OCast Channel
    this.mediaChannel = this.ocast.getMediaChannel();
    this.logger.debug("mediaElement", this.media);
    this.mediaChannel.addVideoMediaManager([EnumMedia.AUDIO, EnumMedia.VIDEO], this.media.nativeElement);
    this.mediaChannel.addImageMediaManager([EnumMedia.IMAGE], this.image.nativeElement);

    // Set Callback
    this.mediaChannel.setNotifier(this.notifierService);
    
    this.currentContainer = this.readyContainer;
    // init observable
    NotifierService.onPrepare.subscribe(prepare => {
      return this.onPrepare(prepare);
    });

    NotifierService.onUpdateStatus.subscribe(playbackStatus => {
      this.onUpdateStatus(playbackStatus);
    });

    NotifierService.onVolume.subscribe(volume => {
      return this.onVolume(volume);
    });

    NotifierService.onPause.subscribe(() => {
      return this.onPause(true);
    });
    NotifierService.onResume.subscribe(options => {
      return this.onResume(options);
    });
    NotifierService.onMute.subscribe(mute => {
      return this.onMute(mute);
    });
  }

  /**
   * Hooks notifications
   * @param position
   * @param options
   * @returns {EnumError}
   */
  onPrepare(prepare: any) {
    console.log(TAG, "onPrepareSubject", prepare);
    switch (prepare.mediaType) {
      case EnumMedia.AUDIO:
      case EnumMedia.VIDEO:
        (this as AppComponent).displayPlayer(true);
        this.title = prepare.title;
        this.subtitle = prepare.subtitle;
        this.logo = prepare.logo;
        this.thumbnail = prepare.options && prepare.options.images && prepare.options.images[0] && prepare.options.images[0].url ? prepare.options.images[0].url : '';
        this.displayOsd(prepare.mediaType === 'video');
        break;
      case EnumMedia.IMAGE:
        console.log(TAG, "onLoad; show image." + prepare.url);
        (this as AppComponent).displayImage(true);
        break;
      default :
        this.displayError('error.title', 'error.media-error');
        console.error(TAG, 'onPrepare; Unknown media type (' + prepare.mediaType + ') => can not display player.');
        return EnumError.UNKNOWN_MEDIA_TYPE;
    }

    console.log(TAG + "onLoad; done.");
    return EnumError.OK;
  }

  onVolume(level) {
    this.volume = Math.floor(level * 100);
    this.displayVolume(true);
    return EnumError.OK;
  }

  // On Seek Event
  onSeek(position, options) {
    this.displayOsd(true);
    this.displayPause(false);
    this.displayBuffering(false);
    return EnumError.OK;
  }


  // Change Track callback
  onTrack(type, trackId, enabled, options) {
    return EnumError.OK;
  }

  // Resum Callback
  onResume(options) {
    this.displayOsd(true);
    this.displayPause(false);
    this.displayBuffering(false);
    return EnumError.OK;
  }


  onPause(display) {
    this.displayOsd(display);
    this.displayPause(display);
    return EnumError.OK;
  }




  

// On set mute event
onMute(mute) {
  this.displayMute(mute);
  if (!mute)
    this.displayVolume(true);

  return EnumError.OK;
}

// On close event
  onClose() {
    console.log(TAG + "onClose");
    this.displayHome();
    return EnumError.OK;
  }

// On stop Event
  onStop() {
    console.log(TAG + "onStop");
    this.displayHome();
    return EnumError.OK;
  }

  onUpdateMetadata() {

  }

// On updateStatus
  onUpdateStatus(playbackStatus) {
    console.log(TAG + " onUpdateStatus", playbackStatus);
    if (playbackStatus instanceof VideoPlaybackStatus) {
      this.currentTime = this.toTimer(playbackStatus.position);
      this.timeTotal= this.toTimer(playbackStatus.duration);
      this.playbackPositionPercent = Math.floor((100 / playbackStatus.duration) * playbackStatus.position);
      this.volume = Math.floor(playbackStatus.volume * 100);
    }
    switch (playbackStatus.status) {
      case EnumMediaStatus.ERROR:
        console.log(TAG + "onError");
        this.displayBuffering(false);
        break;
      case EnumMediaStatus.BUFFERING:
        this.displayBuffering(true);
      default:
        this.displayBuffering(false);
    }
  }


  toTimer(seconds) {
    let h, m, s;

    h = Math.floor(seconds / 3600);
    h = isNaN(h) ? '--' : (h >= 10) ? h : '0' + h;
    m = Math.floor(seconds / 60 % 60);
    m = isNaN(m) ? '--' : (m >= 10) ? m : '0' + m;
    s = Math.floor(seconds % 60);
    s = isNaN(s) ? '--' : (s >= 10) ? s : '0' + s;

    return h + ':' + m + ':' + s;
  }


  displayHome() {
    this.switchCurrentContainerVisibilty();
    this.currentContainer = this.readyContainer;
  }


  displayPlayer(bool: boolean) {
    this.switchCurrentContainerVisibilty();
    this.currentContainer = this.playerContainer;
    this.playerContainerHidden = !this.playerContainerHidden;
  };


  displayImage(bool) {
    this.switchCurrentContainerVisibilty();
    this.currentContainer = this.imageContainer;
    this.imageContainerHidden = !this.imageContainerHidden;
  }


  displayError(title, message) {
    console.log(TAG + "displayError", title, message);
    this.switchCurrentContainerVisibilty();
    this.currentContainer = this.errorContainer;
    this.errorContainerHidden = !this.errorContainerHidden;
  }

  displayMute(mute) {
    console.log(TAG + "displayMute (" + mute + ")");
    if (mute)
      this.visibilityMute = "shown";
    else
      this.visibilityMute = "hidden";
  }
  displayPause(display) {
    if (display)
      this.visibilityPause = "shown";
    else
      this.visibilityPause = "hidden";
  }

  displayOsd(autohide) {
    this.visibilityOsd = "shown";
    clearTimeout(this.osdTimeout);
    if (autohide) {
      this.osdTimeout = setTimeout(() => {
        this.visibilityOsd = "hidden";
      }, 10000);
    }
  }

  displayVolume(autohide) {
    this.visibilityVolume = "shown";
    clearTimeout(this.volumeTimeout);
    if (autohide) {
      this.volumeTimeout = setTimeout(() => {
        this.visibilityVolume = "hidden";
      }, 3000);
    }
  }

  displayBuffering(display) {
    if (display)
      this.visibilityBuffering = "shown";
    else
      this.visibilityBuffering = "hidden";
  }


  clearPlayer() {
    console.log(TAG + "clearPlayer");
    //clear media
    //TODO var mediaElement = document.getElementById('media');
    //TODO mediaElement.src = '';
    //reset osd
    //TODO $('#time-current').text('--:--:--');
    //TODO $('#time-total').text('--:--:--');
    //TODO $('#progress-bar').css('width', 0 + '%');
  }

  private switchCurrentContainerVisibilty() {
    switch (this.currentContainer.nativeElement.id) {
      case "readyContainer":
        this.readyContainerHidden = !this.readyContainerHidden;
        break;
      case "playerContainer":
        this.playerContainerHidden = !this.playerContainerHidden;
        break;
      case "imageContainer":
        this.imageContainerHidden = !this.imageContainerHidden;
        break;
      case "errorContainer":
        this.errorContainerHidden = !this.errorContainerHidden;
        break;
      default :
        console.error("any current container");
    }

  }


}
