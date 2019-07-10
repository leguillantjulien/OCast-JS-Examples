import { EnumMedia, Logger, OCast } from 'ocast-sdk';
import { OrgOCastMediaChannelService } from './OcastMediaChannelService';
import { PlayerService } from './PlayerService';

export class OCastService {
  private playerService: PlayerService;
  private TAG =  ' [OCast Receiver] ';
  private OCAST_URL =  'wss://localhost:4433/ocast';
  private videoElement =  document.getElementById('videoPlayer') as HTMLMediaElement;
  private imgElement =  document.getElementById('img') as HTMLMediaElement;
  private logger = Logger.getInstance();

  constructor() {
    this.playerService = new PlayerService();
    this.init();
  }

  public init() {
    this.logger.info(this.TAG + 'init playerService');
    return this.playerService.init().then(() => {
      this.logger.info(this.TAG + 'init OCast');
      const ocast = new OCast(this.OCAST_URL);
      ocast.start().then(() => {
        ocast.debug = true;
        const mediaChannel = ocast.getMediaChannel();
        mediaChannel.addVideoMediaManager([EnumMedia.AUDIO, EnumMedia.VIDEO], this.videoElement);
        mediaChannel.addImageMediaManager([EnumMedia.IMAGE],  this.imgElement);
        mediaChannel.setNotifier(new OrgOCastMediaChannelService(this.playerService));
      });
    });
  }
}

// tslint:disable-next-line:no-unused-expression
new OCastService();
