import { EnumMedia, Logger, OCast } from 'ocast-sdk';
import { OrgOCastMediaChannelService } from './OcastMediaChannelService';
import { PlayerService } from './PlayerService';
import * as UrlUtils from './utils/URLUtils';
export class OCastService {
  private playerService: PlayerService;
  private TAG = ' [OCastService] ';
  private OCAST_NOSECURE_URL = 'ws://localhost:4433/ocast';
  private OCAST_SECURE_URL = 'wss://localhost:4433/ocast';
  private videoElement = document.getElementById('videoPlayer') as HTMLMediaElement;
  private imgElement = document.getElementById('img') as HTMLMediaElement;
  private logger = Logger.getInstance();

  public init() {
    this.logger.info(this.TAG + 'init playerService');
    this.playerService = new PlayerService();
    return this.playerService.init().then(() => {
      this.logger.info(this.TAG + 'init OCast');
      const ocast = new OCast(this.getWsUrl());
      return ocast.start().then(() => {
        ocast.debug = true;
        const mediaChannel = ocast.getMediaChannel();
        mediaChannel.addVideoMediaManager([EnumMedia.AUDIO, EnumMedia.VIDEO], this.videoElement);
        mediaChannel.addImageMediaManager([EnumMedia.IMAGE], this.imgElement);
        mediaChannel.setNotifier(new OrgOCastMediaChannelService(this.playerService));
      });
    });
  }

  private getWsUrl() {
    let isSecure = UrlUtils.getQueryString('secure');
    return isSecure === 'true' ? this.OCAST_SECURE_URL : this.OCAST_NOSECURE_URL;
  }
}

new OCastService().init();
