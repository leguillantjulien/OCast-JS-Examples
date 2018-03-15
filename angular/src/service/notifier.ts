import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {EnumError, EnumMedia, EnumTransferMode, IMediaNotifier} from "ocast-sdk";


const TAG: string = " [OCast Notifier] ";

/**
 * to avoid loose of context, prefer to use a singlaton service and Subject
 */
@Injectable()
export class NotifierService implements IMediaNotifier {

  static onPrepare = new Subject<any>();

  static onSeek = new Subject<any>();


  static onTrack = new Subject<any>();


  static onResume = new Subject<any>();


  static onPause = new Subject<any>();


  static onVolume = new Subject<any>();


  static onMute = new Subject<any>();


  static onClose = new Subject<any>();


  static onStop = new Subject<any>();


  static onUpdateMetadata = new Subject<any>();


  static onUpdateStatus = new Subject<any>();


  constructor() {

  }

  onPrepare(url: string, title: string, subtitle: string, logo: string, mediaType: EnumMedia, transferMode: EnumTransferMode, autoplay: boolean, frequency: number, options): EnumError {
    let prepare = {
      url: url,
      title: title,
      subtitle: subtitle,
      logo: logo,
      mediaType: mediaType,
      transferMode: transferMode,
      autoplay: autoplay,
      frequency: frequency,
      options: options
    };
    console.log(TAG, 'onPrepare(' + prepare + ')');
    NotifierService.onPrepare.next(prepare);
    return EnumError.OK;
  }


  // On Seek Event
  onSeek(position, options): EnumError {
    let seek = {position: position, options: options}
    console.log(TAG, 'onSeek(' + seek + ')');
    NotifierService.onSeek.next(seek);
    return EnumError.OK;
  }


  // Change Track callback
  onTrack(type, trackId, enabled, options): EnumError {
    let track = {type: type, trackId: trackId, enabled: enabled, options: options}
    console.log(TAG, 'onTrack(' + track + ')');
    NotifierService.onTrack.next(track);
    return EnumError.OK;
  }

  // Resum Callback
  onResume(options): EnumError {
    console.log(TAG, 'onResume(' + options + ')');
    NotifierService.onResume.next(options);
    return EnumError.OK;
  }


  // On Pause event
  onPause(): EnumError {
    console.log(TAG, 'onPause()');
    NotifierService.onPause.next();
    return EnumError.OK;
  }


  // On set volume event
  onVolume(level) {
    console.log(TAG, 'onVolume(' + level + ')');
    NotifierService.onVolume.next(level);
    return EnumError.OK;
  }


// On set mute event
  onMute(mute) {
    console.log(TAG, 'onMute(' + mute + ')');
    NotifierService.onMute.next(mute);
    return EnumError.OK;
  }

// On close event
  onClose() {
    console.log(TAG, 'onClose()');
    NotifierService.onClose.next();
    return EnumError.OK;
  }

  onStop() {
    console.log(TAG, 'onStop()');
    NotifierService.onStop.next();
    return EnumError.OK;
  }

  onUpdateMetadata() {
    console.log(TAG, 'onUpdateMetadata()');
    NotifierService.onUpdateMetadata.next();
  }

  onUpdateStatus(playbackStatus) {
    console.log(TAG, 'onUpdateStatus(' + playbackStatus + ')');
    NotifierService.onUpdateStatus.next(playbackStatus);
  }
}
