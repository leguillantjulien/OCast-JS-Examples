/*
 * Orange ocast-sdk
 * version : 1.2.1 
 * Copyright (C) 2017 Orange
 */
 
var ocast = (function (exports) {
'use strict';

/*
 * Copyright 2017 Orange
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * Copyright 2017 Orange
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Enum for error values.
 * @readonly
 * @enum {number}
 */

(function (EnumError) {
  /** OK Value */
  EnumError[EnumError["OK"] = 0] = "OK";
  /** The message cannot be proceed by the application, not the receiver for this namespace */
  EnumError[EnumError["INVALID_NAMESPACE"] = 2404] = "INVALID_NAMESPACE";
  /** In the namespace org.ocast.media, the command is not implemented by the application */
  EnumError[EnumError["NO_IMPLEMENTATION"] = 2400] = "NO_IMPLEMENTATION";
  /** Invalid Track */
  EnumError[EnumError["INVALID_TRACK"] = 2414] = "INVALID_TRACK";
  /** Parameter are missing */
  EnumError[EnumError["PARAMS_MISSING"] = 2422] = "PARAMS_MISSING";
  /** The command cannot be performed according to the player state */
  EnumError[EnumError["PLAYER_INVALID_STATE"] = 2412] = "PLAYER_INVALID_STATE";
  /** The command cannot be performed according to the player state */
  EnumError[EnumError["NO_PLAYER_INITIALIZED"] = 2413] = "NO_PLAYER_INITIALIZED";
  /** The mediaType is not known */
  EnumError[EnumError["UNKNOWN_MEDIA_TYPE"] = 2415] = "UNKNOWN_MEDIA_TYPE";
  /** The tranferMode is not known */
  EnumError[EnumError["UNKNOWN_TRANSFER_MODE"] = 2006] = "UNKNOWN_TRANSFER_MODE";
  /** Internal Error, please send details on the tracker */
  EnumError[EnumError["UNKNOWN_ERROR"] = 2500] = "UNKNOWN_ERROR";
  /** In the namespace org.ocast.media, the command is not implemented by the application */
  EnumError[EnumError["IMPLEMENTATION_ERROR"] = 2400] = "IMPLEMENTATION_ERROR";
})(exports.EnumError || (exports.EnumError = {}));

/*
 * Copyright 2017 Orange
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Media Status Enum
 */

(function (EnumMediaStatus) {
  EnumMediaStatus[EnumMediaStatus["UNKNOWN"] = 0] = "UNKNOWN";
  EnumMediaStatus[EnumMediaStatus["IDLE"] = 1] = "IDLE";
  EnumMediaStatus[EnumMediaStatus["PLAYING"] = 2] = "PLAYING";
  EnumMediaStatus[EnumMediaStatus["PAUSED"] = 3] = "PAUSED";
  EnumMediaStatus[EnumMediaStatus["BUFFERING"] = 4] = "BUFFERING";
})(exports.EnumMediaStatus || (exports.EnumMediaStatus = {}));

/*
 * Copyright 2017 Orange
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 *  Enum Media
 */

(function (EnumMedia) {
  EnumMedia["VIDEO"] = "video";
  EnumMedia["IMAGE"] = "image";
  EnumMedia["AUDIO"] = "audio";
})(exports.EnumMedia || (exports.EnumMedia = {}));

/*
 * Copyright 2017 Orange
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 *  Enum Track
 */

(function (EnumTrack) {
  EnumTrack["VIDEO"] = "video";
  EnumTrack["TEXT"] = "text";
  EnumTrack["AUDIO"] = "audio";
})(exports.EnumTrack || (exports.EnumTrack = {}));

/*
 * Copyright 2017 Orange
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Transfer Mode
 */

(function (EnumTransferMode) {
  EnumTransferMode["STREAMED"] = "streamed";
  EnumTransferMode["BUFFERED"] = "buffered";
})(exports.EnumTransferMode || (exports.EnumTransferMode = {}));

/*
 * Copyright 2017 Orange
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Enum Transport
 */

(function (EnumTransport) {
  EnumTransport["REPLY"] = "reply";
  EnumTransport["COMMAND"] = "command";
  EnumTransport["EVENT"] = "event";
})(exports.EnumTransport || (exports.EnumTransport = {}));

/*
 * Copyright 2017 Orange
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Transport Class
 */
class Transport {
  /**
   * Constructor
   * @param src
   * @param dst
   * @param type
   * @param id
   * @param message
   */
  constructor(src, dst, type, id, message) {
    this.src = src;
    this.dst = dst;
    this.type = type;
    this.id = id;
    this.message = message;
  }
  /**
   * Set status of message ( OK or Error Message )
   * @param {string} status
   */
  setStatus(status) {
    this.status = status;
  }
}
Transport.WILDCARD = "*";
Transport.UUID = "browser";

/*
 * Copyright 2017 Orange
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Specific Message
 */
class TransportMessage {
  /**
   * @constructor
   * @param {string} service
   * @param {any} data
   */
  constructor(service, data) {
    this.service = service;
    this.data = data;
  }
}

/*
 * Copyright 2017 Orange
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Logger {
    constructor() {
        this.debug = null;
        this.info = null;
        this.warn = null;
        this.error = null;
        this.setDebugLevel(Logger.INFO);
    }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
            Logger.instance.setDebugLevel(Logger.INFO);
        }
        return Logger.instance;
    }
    setDebugLevel(level) {
        /* tslint:disable:no-console */
        this.debug = (() => {
            let timestamp = () => {};
            timestamp.toString = () => {
                return new Date().toISOString() + " - [DEBUG]";
            };
            return console.log.bind(console, "%s", timestamp);
        })();
        this.info = (() => {
            let timestamp = () => {};
            timestamp.toString = () => {
                return new Date().toISOString() + " - [INFO]";
            };
            return console.log.bind(console, "%s", timestamp);
        })();
        this.warn = (() => {
            let timestamp = () => {};
            timestamp.toString = () => {
                return new Date().toISOString() + " - [WARNING]";
            };
            return console.log.bind(console, "%s", timestamp);
        })();
        this.error = (() => {
            let timestamp = () => {};
            timestamp.toString = () => {
                return new Date().toISOString() + " - [ERROR]";
            };
            return console.log.bind(console, "%s", timestamp);
        })();
        if (level > Logger.DEBUG) {
            this.debug = () => {
                return false;
            };
        }
        if (level > Logger.INFO) {
            this.info = () => {
                return false;
            };
        }
        if (level > Logger.WARN) {
            this.warn = () => {
                return false;
            };
        }
        if (level > Logger.ERROR) {
            this.error = () => {
                return false;
            };
        }
    }
}
Logger.DEBUG = 0;
Logger.INFO = 1;
Logger.WARN = 2;
Logger.ERROR = 3;
Logger.NONE = 99;

/*
 * Copyright 2017 Orange
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 * limitations under the License.
 */
const TAG = " [Channel] ";
const UUID = "browser";
const WILDCARD = "*";
const Log = Logger.getInstance();
/**
 * Base Channel Class used to Communicate with the Controller
 */
class Channel {
    /**
     * Represents a Channel.
     * @constructor
     * @param {string} name - The service name of the channel, used to route the message.
     */
    constructor(name) {
        this.name = name;
        this.waitingReplies = {};
        this.ws = null;
    }
    setSocket(websocket) {
        this.ws = websocket;
    }
    /**
     * Method used to notify a new message for this Channel
     * @param {Transport} transport - message received
     */
    onMessage(transport) {
        if (transport.type === exports.EnumTransport.REPLY) {
            const id = transport.id;
            if (this.waitingReplies[id]) {
                this.waitingReplies[id](transport.message.data);
                delete this.waitingReplies[id];
            }
            return;
        }
        Log.warn(TAG + "onMessage need to be implemented for namespace " + this.name);
        this.sendReply(transport.id, transport.src, { params: { code: exports.EnumError.NO_IMPLEMENTATION } });
    }
    /**
     * send Reply Command
     * @param {number} id - Request identifier
     * @param {string} dst - Destination identifier
     * @param {any} data - Data of the reply
     */
    sendReply(id, dst, data) {
        const message = new Transport(UUID, dst, exports.EnumTransport.REPLY, id, new TransportMessage(this.name, data));
        message.setStatus("OK");
        Log.debug(TAG + "sendReply : " + JSON.stringify(message));
        this.sendMessage(message);
    }
    /**
     * sendEvent
     * @param {any} data - Data of the event
     */
    sendEvent(data) {
        const message = new Transport(UUID, WILDCARD, exports.EnumTransport.EVENT, Channel.sequenceMessage++, new TransportMessage(this.name, data));
        Log.debug(TAG + "sendEvent : " + JSON.stringify(message));
        this.sendMessage(message);
    }
    /**
     * send command event
     * @param {string} dst - Destination identifier
     * @param {any} data - Data of the command
     */
    sendCommand(dst, data) {
        const message = new Transport(UUID, dst, exports.EnumTransport.COMMAND, Channel.sequenceMessage++, new TransportMessage(this.name, data));
        Log.debug(TAG + "sendCommand : " + JSON.stringify(message));
        return new Promise((resolve, reject) => {
            this.waitingReplies[message.id] = resolve;
            this.sendMessage(message);
        });
    }
    /**
     * Send Transport : Basic Command
     * @param {Transport} message - Message to send
     * @private
     */
    sendMessage(message) {
        this.ws.send(JSON.stringify(message));
    }
}
Channel.sequenceMessage = 1;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */







function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

/*
 * Copyright 2017 Orange
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * PlaybackStatus Class
 */
class PlaybackStatus {
  /**
   * @constructor
   * @param {EnumMediaStatus} state - Media Status
   * @param {number} volume - Audio volume
   * @param {boolean} mute - Mute OnOff Value
   * @param {number} position - Current Position
   * @param {number} duration - Duration
   */
  constructor(state, volume, mute, position, duration) {
    this.state = state;
    this.volume = volume;
    this.mute = mute;
    this.position = position;
    this.duration = duration;
  }
}

/*
 * Copyright 2017 Orange
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Image Playback Status
 */
class ImagePlaybackStatus extends PlaybackStatus {
  /**
   * @param {EnumMediaStatus} status
   */
  constructor(status) {
    super(status, null, null, null, null);
    this.status = status;
  }
}

/*
 * Copyright 2017 Orange
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Metadata Root Object
 */
class Metadata {
  /**
   *
   * @param {string} title
   * @param {string} subtitle
   * @param {string} logo
   * @param {EnumMedia} mediaType
   * @param {EnumTransferMode} transferMode
   */
  constructor(title, subtitle, logo, mediaType, transferMode) {
    this.title = title;
    this.subtitle = subtitle;
    this.logo = logo;
    this.mediaType = mediaType;
    this.transferMode = transferMode;
    this.textTracks = [];
    this.audioTracks = [];
    this.videoTracks = [];
  }
}

/*
 * Copyright 2017 Orange
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Log$2 = Logger.getInstance();
/**
 * Base Class MediaController
 */
class Media {
    /**
     * @constructor:
     * @param mediaElement
     * @param mediaChannel
     */
    constructor(mediaElement, mediaChannel) {
        this.mediaElement = mediaElement;
        this.mediaChannel = mediaChannel;
        this.mediaElement.status = exports.EnumMediaStatus.IDLE;
        this.lastUpdate = 0;
        // bind media listeners on onUpdateStatus
        this.statusHandler = this.onUpdateStatus.bind(this);
        this.metadataHandler = this.onUpdateMetadata.bind(this);
        this.metadata = null;
    }
    /**
     * Return Status
     * @returns {any}
     */
    getStatus() {
        return this.mediaElement ? this.mediaElement.status : null;
    }
    /**
     * update frequency
     * @param frequency
     */
    setUpdateFrequency(frequency) {
        this.updateFrequency = frequency;
    }
    seek(position) {
        return exports.EnumError.NO_IMPLEMENTATION;
    }
    setVolume(level) {
        return exports.EnumError.NO_IMPLEMENTATION;
    }
    setMute(mute) {
        return exports.EnumError.NO_IMPLEMENTATION;
    }
    pause() {
        return exports.EnumError.NO_IMPLEMENTATION;
    }
    stop() {
        this.clear();
        this.updateStatus(exports.EnumMediaStatus.IDLE);
        return exports.EnumError.OK;
    }
    abort() {
        this.clear();
        this.updateStatus(exports.EnumMediaStatus.IDLE);
        return exports.EnumError.OK;
    }
    resume() {
        return exports.EnumError.NO_IMPLEMENTATION;
    }
    /**
     * erase media player
     */
    clear() {
        this.load(null);
        this.removeListeners();
    }
    setTrack(type, trackId, enabled) {
        return exports.EnumError.NO_IMPLEMENTATION;
    }
    /**
     * Add Listeners
     * @private
     */
    addListeners() {
        const events = this.getMediaEvents();
        for (const event in events) {
            if (events.hasOwnProperty(event)) {
                Log$2.debug("add Event Listener on <<<" + event + ">>>");
                this.mediaElement.addEventListener(event, this.statusHandler);
            }
        }
        this.mediaElement.addEventListener("loadedmetadata", this.metadataHandler);
    }
    /**
     * Remove Listeners
     * @private
     */
    removeListeners() {
        const events = this.getMediaEvents();
        for (const event in events) {
            if (events.hasOwnProperty(event)) {
                this.mediaElement.removeEventListener(event, this.statusHandler);
            }
        }
    }
    onUpdateMetadata(event) {
        if (!this.mediaElement) {
            console.warn("MediaElement is null, ignore event ", event);
            return;
        }
        this.mediaChannel.onUpdateMetadata(this.getMedatadata());
    }
    onUpdateStatus(event) {
        const mapping = this.getMediaEvents();
        this.updateStatus(mapping[event.type]);
    }
    updateStatus(status) {
        if (!this.mediaElement) {
            Log$2.warn("MediaElement is null, ignore event ", event);
            return;
        }
        const newUpdate = new Date().getTime();
        const previousStatus = this.mediaElement.status;
        this.mediaElement.status = status;
        // Dispatch Event If Needed
        if (previousStatus !== this.mediaElement.status) {
            this.lastUpdate = newUpdate;
            this.mediaChannel.onUpdateStatus(this.getPlaybackStatus());
        } else if (this.updateFrequency !== 0 && newUpdate > this.lastUpdate + this.updateFrequency * 1000) {
            this.lastUpdate = newUpdate;
            this.mediaChannel.onUpdateStatus(this.getPlaybackStatus());
        }
        // Manage Automatic Transition
        if (this.mediaElement.status === exports.EnumMediaStatus.IDLE || this.mediaElement.status === exports.EnumMediaStatus.UNKNOWN) {
            this.mediaElement.status = exports.EnumMediaStatus.IDLE;
            this.mediaChannel.onUpdateStatus(this.getPlaybackStatus());
        }
    }
}

/*
 * Copyright 2017 Orange
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Media Controller for Images
 */
class ImageMedia extends Media {
    /**
     * Return get playback Status
     * @returns {PlaybackStatus} - Play back Status
     */
    getPlaybackStatus() {
        // TODO: Adapt PlaybackStatus for Images ?
        return new ImagePlaybackStatus(this.mediaElement.status);
    }
    /** set metadata
     * @param title
     * @param subtitle
     * @param logo
     * @param mediaType
     * @param transferMode
     * @param subtitleTracks
     * @param audioTracks
     */
    setMetadata(title, subtitle, logo, mediaType, transferMode) {
        // TODO: Adapt metadata for Images ?
        this.metadata = new Metadata(title, subtitle, logo, mediaType, transferMode);
    }
    getMedatadata() {
        return this.metadata;
    }
    /**
     * Set the source of the stream
     * @param {string} src - url of the stream
     */
    load(src) {
        if (src) {
            this.addListeners();
            this.mediaElement.src = src;
        } else {
            this.mediaElement.src = "";
        }
    }
    /**
     * get Table of Mapping With Internal Status
     * @returns {{ended: EnumMediaStatus, error: EnumMediaStatus, timeupdate: EnumMediaStatus}}
     * @protected
     */
    getMediaEvents() {
        return {
            ended: exports.EnumMediaStatus.BUFFERING,
            error: exports.EnumMediaStatus.UNKNOWN,
            load: exports.EnumMediaStatus.PLAYING
        };
    }
}

/*
 * Copyright 2017 Orange
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Track Class ( Audio / Video /Text)
 */
class Track {
  /**
   * Track Constructor
   * @param type
   * @param trackId
   * @param enabled
   * @param language
   * @param label
   */
  constructor(type, trackId, enabled = false, language = "", label = "") {
    this.type = type;
    this.trackId = trackId;
    this.enabled = enabled;
    this.language = language;
    this.label = label;
  }
}

/*
 * Copyright 2017 Orange
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * VideoPlaybackStatus Class
 */
class VideoPlaybackStatus extends PlaybackStatus {
  /**
   * @constructor
   * @param {EnumMediaStatus} state - Media Status
   * @param {number} volume - Audio volume
   * @param {boolean} mute - Mute OnOff Value
   * @param {number} position - Current Position
   * @param {number} duration - Duration
   */
  constructor(state, volume, mute, position, duration) {
    super(state, volume, mute, position, duration);
    this.state = state;
    this.volume = volume;
    this.mute = mute;
    this.position = position;
    this.duration = duration;
  }
}

/*
 * Copyright 2017 Orange
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 * limitations under the License.
 */
const TAG$2 = " [VideoMedia] ";
const Log$3 = Logger.getInstance();
/**
 * Media Controller for Audio/Video
 */
class VideoMedia extends Media {
    /**
     * Get Media Player Status
     * @returns {PlaybackStatus}
     */
    getPlaybackStatus() {
        return new VideoPlaybackStatus(this.mediaElement.status, this.mediaElement.volume, this.mediaElement.muted, this.mediaElement.currentTime, this.mediaElement.duration);
    }
    /** set metadata
     * @param title
     * @param subtitle
     * @param logo
     * @param mediaType
     * @param transferMode
     * @param subtitleTracks
     * @param audioTracks
     */
    setMetadata(title, subtitle, logo, mediaType, transferMode) {
        this.metadata = new Metadata(title, subtitle, logo, mediaType, transferMode);
    }
    getMedatadata() {
        this.updateTracks();
        return this.metadata;
    }
    setTrack(type, trackId, enabled) {
        let status = this.getStatus();
        let mediaVideo = this.mediaElement;
        let i = 0;
        if (status === exports.EnumMediaStatus.BUFFERING || status === exports.EnumMediaStatus.PLAYING || status === exports.EnumMediaStatus.PAUSED) {
            try {
                let id = parseFloat(trackId);
                switch (type) {
                    case exports.EnumTrack.AUDIO:
                        for (i = 0; i < mediaVideo.audioTracks.length; i++) {
                            mediaVideo.audioTracks[i].enabled = !enabled;
                        }
                        mediaVideo.audioTracks[id].enabled = enabled;
                        break;
                    case exports.EnumTrack.VIDEO:
                        for (i = 0; i < mediaVideo.videoTracks.length; i++) {
                            mediaVideo.videoTracks[i].selected = !enabled;
                        }
                        mediaVideo.videoTracks[id].selected = enabled;
                        break;
                    case exports.EnumTrack.TEXT:
                        for (i = 0; i < mediaVideo.textTracks.length; i++) {
                            mediaVideo.textTracks[i].mode = enabled ? "disabled" : "showing";
                        }
                        mediaVideo.textTracks[id].mode = enabled ? "showing" : "disabled";
                        break;
                    default:
                        return exports.EnumError.INVALID_TRACK;
                }
                return exports.EnumError.OK;
            } catch (e) {
                Log$3.warn(TAG$2 + "setTrack error : ", e);
                return exports.EnumError.INVALID_TRACK;
            }
        } else {
            return exports.EnumError.PLAYER_INVALID_STATE;
        }
    }
    seek(position) {
        let status = this.getStatus();
        if (status !== exports.EnumMediaStatus.BUFFERING && status !== exports.EnumMediaStatus.PLAYING && status !== exports.EnumMediaStatus.PAUSED) {
            return exports.EnumError.PLAYER_INVALID_STATE;
        }
        this.mediaElement.currentTime = position;
        return exports.EnumError.OK;
    }
    setVolume(level) {
        let status = this.getStatus();
        if (status !== exports.EnumMediaStatus.PLAYING && status !== exports.EnumMediaStatus.PAUSED) {
            return exports.EnumError.PLAYER_INVALID_STATE;
        }
        this.mediaElement.volume = level;
        return exports.EnumError.OK;
    }
    setMute(mute) {
        let status = this.getStatus();
        if (status !== exports.EnumMediaStatus.PLAYING && status !== exports.EnumMediaStatus.PAUSED) {
            return exports.EnumError.PLAYER_INVALID_STATE;
        }
        this.mediaElement.muted = mute;
        return exports.EnumError.OK;
    }
    pause() {
        let status = this.getStatus();
        if (status !== exports.EnumMediaStatus.BUFFERING && status !== exports.EnumMediaStatus.PLAYING) {
            return exports.EnumError.PLAYER_INVALID_STATE;
        }
        this.mediaElement.pause();
        return exports.EnumError.OK;
    }
    resume() {
        let status = this.getStatus();
        if (status !== exports.EnumMediaStatus.PAUSED) {
            return exports.EnumError.PLAYER_INVALID_STATE;
        }
        this.mediaElement.play();
        return exports.EnumError.OK;
    }
    /**
     * Set the source of the stream
     * @param {string} src - url of the stream
     */
    load(src, autoplay) {
        if (autoplay !== undefined) {
            this.mediaElement.autoplay = autoplay;
        }
        if (src) {
            this.addListeners();
            this.mediaElement.src = src;
        } else {
            this.mediaElement.pause();
            this.mediaElement.src = "";
            this.mediaElement.load();
        }
    }
    /**
     * get is Live Status
     * @returns {boolean}
     */
    get isLive() {
        return this.metadata.transferMode === exports.EnumTransferMode.STREAMED;
    }
    /**
     * return Mapping with internal Values
     * @returns {{abort: EnumMediaStatus, ended: EnumMediaStatus, error: EnumMediaStatus, loadstart: EnumMediaStatus,
     * pause: EnumMediaStatus, playing: EnumMediaStatus, seeking: EnumMediaStatus, timeupdate: EnumMediaStatus}}
     * @protected
     */
    getMediaEvents() {
        return {
            abort: exports.EnumMediaStatus.IDLE,
            ended: exports.EnumMediaStatus.IDLE,
            error: exports.EnumMediaStatus.UNKNOWN,
            loadstart: exports.EnumMediaStatus.BUFFERING,
            pause: exports.EnumMediaStatus.PAUSED,
            playing: exports.EnumMediaStatus.PLAYING,
            seeking: exports.EnumMediaStatus.BUFFERING,
            timeupdate: exports.EnumMediaStatus.PLAYING
        };
    }
    onUpdateMetadata(event) {
        if (!this.mediaElement) {
            Log$3.error("MediaElement is null, ignore event (" + event.type + ")");
            return;
        }
        if (!this.metadata) {
            Log$3.error("Metadata is null !!! ( implementation error )");
            return;
        }
        if (!(this.mediaElement.audioTracks && this.mediaElement.videoTracks && this.mediaElement.textTracks)) {
            Log$3.debug("Tracks not implemented !!! ( implementation error )");
        }
        let signature = JSON.stringify(this.metadata);
        this.updateTracks();
        if (JSON.stringify(this.metadata) !== signature) {
            this.mediaChannel.onUpdateMetadata(this.getMedatadata());
        }
    }
    /**
     * Check if all fields are fill on a track
     * @param track Track to check
     * @param type Track type (video, audio, text)
     * @param trackNumber Track index
     * @param properties Properties to check into track
     */
    logTrackMissingFields(track, type, trackNumber, properties) {
        properties.forEach(property => {
            if (!property.dest) {
                property.dest = property.src;
            }
            if (!track.hasOwnProperty(property.src)) {
                let logText = TAG$2 + " When extract metadatas, " + type + " track " + trackNumber + " haven't " + property.src + " property defined";
                if (property.dest !== property.src) {
                    logText += " (to set '" + property.dest + "' property)";
                }
                Log$3.info(logText);
            }
        });
    }
    updateTracks() {
        // Catch AudioTracks
        let tracks;
        tracks = [];
        // TODO: Refactor this code (redundancy)
        const audioTracks = this.mediaElement.audioTracks;
        if (audioTracks) {
            for (let index = 0; index < audioTracks.length; index++) {
                const audioTrack = audioTracks[index];
                this.logTrackMissingFields(audioTrack, "audio", index, [{ src: "enabled" }, { src: "language" }, { src: "label" }]);
                tracks.push(new Track(exports.EnumTrack.AUDIO, index.toString(), audioTrack.enabled, audioTrack.language, audioTrack.label));
            }
            this.metadata.audioTracks = tracks;
        }
        // Catch VideoTracks
        tracks = [];
        const videoTracks = this.mediaElement.videoTracks;
        if (videoTracks) {
            for (let index = 0; index < videoTracks.length; index++) {
                const videoTrack = videoTracks[index];
                this.logTrackMissingFields(videoTrack, "audio", index, [{ src: "selected", dest: "enabled" }, { src: "language" }, { src: "label" }]);
                tracks.push(new Track(exports.EnumTrack.VIDEO, index.toString(), videoTrack.selected, videoTrack.language, videoTrack.label));
            }
            
            this.metadata.videoTracks = tracks;
        }
        // Catch TextTracks
        tracks = [];
        const textTracks = this.mediaElement.textTracks;
        if (textTracks) {
            for (let index = 0; index < textTracks.length; index++) {
                const textTrack = textTracks[index];
                this.logTrackMissingFields(textTrack, "audio", index, [{ src: "language" }, { src: "label" }]);
                tracks.push(new Track(exports.EnumTrack.TEXT, index.toString(), textTrack.mode === "showing", textTrack.language, textTrack.label));
            }
            
            this.metadata.textTracks = tracks;
        }
    }
}

var EnumMediaMessage;
(function (EnumMediaMessage) {
    EnumMediaMessage["PAUSE"] = "pause";
    EnumMediaMessage["RESUME"] = "resume";
    EnumMediaMessage["SEEK"] = "seek";
    EnumMediaMessage["TRACK"] = "track";
    EnumMediaMessage["STOP"] = "stop";
    EnumMediaMessage["CLOSE"] = "close";
    EnumMediaMessage["VOLUME"] = "volume";
    EnumMediaMessage["GET_PLAYBACK_STATUS"] = "getPlaybackStatus";
    EnumMediaMessage["GET_METADATA"] = "getMetadata";
    EnumMediaMessage["MUTE"] = "mute";
    EnumMediaMessage["PREPARE"] = "prepare";
})(EnumMediaMessage || (EnumMediaMessage = {}));

/*
 * Copyright 2017 Orange
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 * limitations under the License.
 */
const TAG$1 = " [MediaChannel] ";
const Log$1 = Logger.getInstance();
// Manage annotations to call methods by transport message
// Store all methods/message type
const methodsByMessage = {};
/**
 * MediaChannel Class dedicated to OCast Protocol
 */
class MediaChannel extends Channel {
    /**
     * Base class for OCast Protocol (MediaChannel).
     * @constructor
     */
    constructor() {
        super(MediaChannel.NAMESPACE);
        this.media = null;
        this.medias = [];
    }
    setNotifier(notifier) {
        this.notifier = notifier;
    }
    addVideoMediaManager(types, mediaElement) {
        let media = new VideoMedia(mediaElement, this);
        for (const key in types) {
            if (types.hasOwnProperty(key)) {
                this.medias[types[key]] = media;
            }
        }
    }
    addImageMediaManager(types, mediaElement) {
        let media = new ImageMedia(mediaElement, this);
        for (const key in types) {
            if (types.hasOwnProperty(key)) {
                this.medias[types[key]] = media;
            }
        }
    }
    /**
     * Implements specific parsing for this channel
     * @param {Transport} transport - Message to send
     */
    onMessage(transport) {
        // Check if message is supported
        if (!methodsByMessage[transport.message.data.name]) {
            Log$1.error(TAG$1 + "Message type '" + transport.message.data.name + "' unknown");
            if (transport.type === exports.EnumTransport.COMMAND) {
                this.sendReply(transport.id, transport.src, {
                    name: transport.message.data.name,
                    params: { code: exports.EnumError.NO_IMPLEMENTATION }
                });
            }
            return;
        }
        // Explode message to call method
        const methodDescriptor = methodsByMessage[transport.message.data.name];
        const paramsToCallMethod = [];
        const paramsMessage = transport.message.data.params || {};
        let validate = true;
        methodDescriptor.params.forEach(paramType => {
            switch (paramType.name) {
                case "id":
                    paramsToCallMethod.push(transport.id);
                    break;
                case "src":
                    paramsToCallMethod.push(transport.src);
                    break;
                case "options":
                    paramsToCallMethod.push(transport.message.data.options);
                    break;
                default:
                    if (!paramsMessage.hasOwnProperty(paramType.name)) {
                        Log$1.error(TAG$1 + "Mandatory parameter is not found <<" + paramType.name + ">>");
                        validate = false;
                    } else {
                        paramsToCallMethod.push(paramsMessage[paramType.name]);
                    }
            }
        });
        // Check if all params are ok
        if (!validate) {
            Log$1.error(TAG$1 + "Error while executing " + methodDescriptor.methodName + " paramters missing)");
            if (transport.type === exports.EnumTransport.COMMAND) {
                this.sendReply(transport.id, transport.src, {
                    name: transport.message.data.name,
                    params: { code: exports.EnumError.PARAMS_MISSING }
                });
            }
            return;
        }
        // All params are ok, call method
        try {
            const returnCode = methodDescriptor.method.apply(this, paramsToCallMethod);
            if (typeof returnCode !== "undefined") {
                // tslint:disable-next-line:no-string-literal
                if (typeof returnCode["then"] === "function") {
                    returnCode.then(result => {
                        if (typeof result !== "undefined") {
                            this.sendReply(transport.id, transport.src, {
                                name: transport.message.data.name,
                                params: { code: result }
                            });
                        }
                    }, e => {
                        Log$1.error(TAG$1 + "Error while executing " + methodDescriptor.methodName + " with error ", e);
                        if (transport.type === exports.EnumTransport.COMMAND) {
                            this.sendReply(transport.id, transport.src, {
                                name: transport.message.data.name,
                                params: { code: exports.EnumError.UNKNOWN_ERROR }
                            });
                        }
                    });
                } else {
                    this.sendReply(transport.id, transport.src, {
                        name: transport.message.data.name,
                        params: { code: returnCode }
                    });
                }
            }
        } catch (e) {
            Log$1.error(TAG$1 + "Error while executing " + methodDescriptor.methodName + " with error ", e);
            if (transport.type === exports.EnumTransport.COMMAND) {
                this.sendReply(transport.id, transport.src, {
                    name: transport.message.data.name,
                    params: { code: exports.EnumError.UNKNOWN_ERROR }
                });
            }
        }
    }
    /**
     * Override this method to implement prepare command
     * @param {url} url - Url of the source
     * @param {string} title - Title of the media
     * @param {string}subtitle - subtitle of the media
     * @param {string} logo - Optionnal Logo
     * @param {EnumMedia} mediaType - Media Type
     * @param {EnumTransferMode} transferMode - Type of Stream
     * @param {boolean} autoplay - Boolean to play stream automaticly
     * @param {number} frequency - Status update Frequency
     * @param options - Options
     * @returns {EnumError}
     */
    doPrepare(url, title, subtitle, logo, mediaType, transferMode, autoplay, frequency, options) {
        Log$1.debug(TAG$1 + "onPrepare Receives (" + url + "," + title + "," + subtitle + "," + logo + "," + mediaType + "," + transferMode + "," + autoplay + "," + frequency + "," + options);
        if (!this.medias.hasOwnProperty(mediaType)) {
            return exports.EnumError.NO_IMPLEMENTATION;
        }
        this.media = this.medias[mediaType];
        this.media.setUpdateFrequency(frequency);
        this.media.setMetadata(title, subtitle, logo, mediaType, transferMode);
        this.media.load(url, autoplay);
        return this.callNotifier("onPrepare", arguments);
    }
    /**
     * track
     * @param subtitleTrack
     * @param audioTrack
     * @returns {EnumError} - Error code
     */
    doTrack(type, trackId, enabled, options) {
        Log$1.debug(TAG$1 + "onTrack");
        if (!this.media) {
            return exports.EnumError.NO_PLAYER_INITIALIZED;
        }
        let returnCode = this.media.setTrack(type, trackId, enabled);
        return returnCode !== exports.EnumError.OK ? returnCode : this.callNotifier("onTrack", arguments);
    }
    /**
     * resume
     * @param options
     * @returns {EnumError} - Error code
     */
    doResume(options) {
        Log$1.debug(TAG$1 + "onResume");
        if (!this.media) {
            return exports.EnumError.NO_PLAYER_INITIALIZED;
        }
        let status = this.media != null ? this.media.getStatus() : null;
        if (status !== exports.EnumMediaStatus.PAUSED) {
            return exports.EnumError.PLAYER_INVALID_STATE;
        }
        this.media.resume();
        return this.callNotifier("onResume", arguments);
    }
    /**
     * pause
     * @param options
     * @returns {EnumError} - Error code
     */
    doPause(options) {
        Log$1.debug(TAG$1 + "onPause");
        if (!this.media) {
            return exports.EnumError.NO_PLAYER_INITIALIZED;
        }
        let returnCode = this.media.pause();
        return returnCode !== exports.EnumError.OK ? returnCode : this.callNotifier("onPause", arguments);
    }
    /**
     * stop
     * @param options
     * @returns {EnumError} - Error code
     */
    doStop(options) {
        Log$1.debug("onStop");
        if (!this.media) {
            return exports.EnumError.NO_PLAYER_INITIALIZED;
        }
        let returnCode = this.media.stop();
        return returnCode !== exports.EnumError.OK ? returnCode : this.callNotifier("onStop", arguments);
    }
    /**
     * close
     * @param options
     * @returns {EnumError} - Error code
     */
    doClose(options) {
        Log$1.debug(TAG$1 + "onClose");
        if (!this.media) {
            return exports.EnumError.NO_PLAYER_INITIALIZED;
        }
        let returnCode = this.media.abort();
        return returnCode !== exports.EnumError.OK ? returnCode : this.callNotifier("onClose", arguments);
    }
    /**
     * on Seek
     * @param {number} position
     * @param options
     * @returns {EnumError} - Error code
     */
    doSeek(position, options) {
        Log$1.debug(TAG$1 + "onSeek");
        if (!this.media) {
            return exports.EnumError.NO_PLAYER_INITIALIZED;
        }
        let returnCode = this.media.seek(position);
        return returnCode !== exports.EnumError.OK ? returnCode : this.callNotifier("onSeek", arguments);
    }
    /**
     * Implements  volume command
     * @param {level} volume
     * @param options
     * @returns {EnumError} - Error code
     */
    doVolume(volume, options) {
        Log$1.debug(TAG$1 + "onVolume");
        if (!this.media) {
            return exports.EnumError.NO_PLAYER_INITIALIZED;
        }
        let returnCode = this.media.setVolume(volume);
        return returnCode !== exports.EnumError.OK ? returnCode : this.callNotifier("onVolume", arguments);
    }
    /**
     * Send a mute command
     * @param {boolean} mute
     * @param options
     * @returns {EnumError} - Error code
     */
    doMute(mute, options) {
        Log$1.debug(TAG$1 + "onMute");
        if (!this.media) {
            return exports.EnumError.NO_PLAYER_INITIALIZED;
        }
        let returnCode = this.media.setMute(mute);
        return returnCode !== exports.EnumError.OK ? returnCode : this.callNotifier("onMute", arguments);
    }
    /**
     * getPlaybackStatus
     * @param {number} id
     * @param {string} src
     * @param options
     * @returns {EnumError} - Error code
     */
    doGetPlaybackStatus(id, src, options) {
        Log$1.debug(TAG$1 + "onGetPlaybackStatus" + id + "," + src);
        if (!this.media) {
            return exports.EnumError.NO_PLAYER_INITIALIZED;
        }
        let status = this.media.getPlaybackStatus();
        status.code = exports.EnumError.OK;
        this.sendReply(id, src, { name: MediaChannel.EVENTS.PLAYBACK_STATUS, params: status, options });
    }
    /**
     * Reply to getMetadata Command
     * @param {number} id
     * @param {string} src
     * @param  options
     * @returns {EnumError} - Error code
     */
    doGetMetadata(id, src, options) {
        Log$1.debug(TAG$1 + "onGetMetadata " + id + "," + src);
        if (!this.media) {
            return exports.EnumError.NO_PLAYER_INITIALIZED;
        }
        let status = this.media.getMedatadata();
        status.code = exports.EnumError.OK;
        this.sendReply(id, src, { name: MediaChannel.EVENTS.METADATA_CHANGED, params: status, options });
    }
    /**
     * Send a new playback status on MediaChannel
     */
    sendPlaybackStatus() {
        this.sendEvent({
            name: MediaChannel.EVENTS.PLAYBACK_STATUS,
            options: null,
            params: this.media.getPlaybackStatus()
        });
    }
    /**
     * Send a new metadachanged Event on MediaChannel
     */
    sendMetadataChanged() {
        // To be called ....
        this.sendEvent({
            name: MediaChannel.EVENTS.METADATA_CHANGED,
            options: null,
            params: this.media.getMedatadata()
        });
    }
    onUpdateStatus(status) {
        this.sendPlaybackStatus();
        this.callNotifier("onUpdateStatus", arguments);
    }
    onUpdateMetadata(metadata) {
        this.sendMetadataChanged();
        this.callNotifier("onUpdateMetadata", arguments);
    }
    callNotifier(method, args) {
        if (this.notifier !== undefined) {
            try {
                return this.notifier[method].apply(this.notifier, args);
            } catch (e) {
                Log$1.error(TAG$1 + "Implementation error on Notifier Method " + method + " : ", e);
                Log$1.error(TAG$1 + "Implementation error on Notifier Method " + method + " : ", e);
                return exports.EnumError.IMPLEMENTATION_ERROR;
            }
        }
        return exports.EnumError.OK;
    }
}
MediaChannel.NAMESPACE = "org.ocast.media";
MediaChannel.EVENTS = {
    METADATA_CHANGED: "metadataChanged",
    PLAYBACK_STATUS: "playbackStatus"
};
__decorate([MethodToCallByMessage({
    message: EnumMediaMessage.PREPARE,
    params: [{ name: "url", type: String }, { name: "title", type: String }, { name: "subtitle", type: String }, { name: "logo", type: String }, { name: "mediaType", type: exports.EnumMedia }, { name: "transferMode", type: exports.EnumTransferMode }, { name: "autoplay", type: Boolean }, { name: "frequency", type: Number }, { name: "options", type: null }]
})], MediaChannel.prototype, "doPrepare", null);
__decorate([MethodToCallByMessage({
    message: EnumMediaMessage.TRACK,
    params: [{ name: "type", type: exports.EnumTrack }, { name: "trackId", type: String }, { name: "enabled", type: Boolean }, { name: "options", type: null }]
})], MediaChannel.prototype, "doTrack", null);
__decorate([MethodToCallByMessage({
    message: EnumMediaMessage.RESUME,
    params: [{ name: "options", type: null }]
})], MediaChannel.prototype, "doResume", null);
__decorate([MethodToCallByMessage({
    message: EnumMediaMessage.PAUSE,
    params: [{ name: "options", type: null }]
})], MediaChannel.prototype, "doPause", null);
__decorate([MethodToCallByMessage({
    message: EnumMediaMessage.STOP,
    params: [{ name: "options", type: null }]
})], MediaChannel.prototype, "doStop", null);
__decorate([MethodToCallByMessage({
    message: EnumMediaMessage.CLOSE,
    params: [{ name: "options", type: null }]
})], MediaChannel.prototype, "doClose", null);
__decorate([MethodToCallByMessage({
    message: EnumMediaMessage.SEEK,
    params: [{ name: "position", type: Number }, { name: "options", type: null }]
})], MediaChannel.prototype, "doSeek", null);
__decorate([MethodToCallByMessage({
    message: EnumMediaMessage.VOLUME,
    params: [{ name: "volume", type: Number }, { name: "options", type: null }]
})], MediaChannel.prototype, "doVolume", null);
__decorate([MethodToCallByMessage({
    message: EnumMediaMessage.MUTE,
    params: [{ name: "mute", type: Boolean }, { name: "options", type: null }]
})], MediaChannel.prototype, "doMute", null);
__decorate([MethodToCallByMessage({
    message: EnumMediaMessage.GET_PLAYBACK_STATUS,
    params: [{ name: "id", type: Number }, { name: "src", type: String }, { name: "options", type: null }]
})], MediaChannel.prototype, "doGetPlaybackStatus", null);
__decorate([MethodToCallByMessage({
    message: EnumMediaMessage.GET_METADATA,
    params: [{ name: "id", type: Number }, { name: "src", type: String }, { name: "options", type: null }]
})], MediaChannel.prototype, "doGetMetadata", null);
// Declare annotation
/**
 * Annotation to declare a link between a method and a message
 * @param controlParams Details
 */
function MethodToCallByMessage(controlParams) {
    return (target, propertyKey, descriptor) => {
        // When a new method is detected, store his declaration
        methodsByMessage[controlParams.message] = {
            method: descriptor.value,
            methodName: propertyKey,
            params: controlParams.params
        };
    };
}

/*
 * Copyright 2017 Orange
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 * limitations under the License.
 */
const TAG$3 = " [WebappChannel] ";
const Log$4 = Logger.getInstance();
/**
 * WebApp Channel
 */
class WebappChannel extends Channel {
  /**
   * Constructor
   */
  constructor() {
    super(WebappChannel.NAMESPACE);
  }
  /**
   * Update socket used by the channel
   * @param {WebSocket} ws - Websocket instance
   * @public
   */
  setSocket(ws) {
    super.setSocket(ws);
    this.sendConnected();
  }
  /**
   * send Connected Event
   * @private
   */
  sendConnected() {
    Log$4.debug(TAG$3 + "send connected event");
    this.sendEvent({ name: WebappChannel.EVENTS.CONNECTION_STATUS, params: { status: "connected" } });
  }
}
/**
 * Default NameSpace
 * @type {string}
 */
WebappChannel.NAMESPACE = "org.ocast.webapp";
/**
 * List of Events
 * @type {{CONNECTION_STATUS: string}}
 */
WebappChannel.EVENTS = {
  CONNECTION_STATUS: "connectedStatus"
};

/*
 * Copyright 2017 Orange
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 * limitations under the License.
 */
const TAG$4 = " [OCast] ";
const Log$5 = Logger.getInstance();
/**
 * OCast Root Object
 */
class OCast {
    /**
     * OCast Root Object, create default channel 'webapp' and 'media'
     * @constructor
     */
    constructor(url = "wss://localhost:4433/ocast") {
        this.url = url;
        this.debug = false;
        this.ws = null;
        this.channels = [];
        this.setupMediaChannel();
        this.setupWebappChannel();
    }
    /**
     * Public function to Start initialization
     * @public
     */
    start() {
        return new Promise((resolve, reject) => {
            this.ws = new WebSocket(this.url);
            this.ws.onopen = () => {
                resolve();
                this.onConnected();
            };
            this.ws.onmessage = this.onMessage.bind(this);
            this.ws.onerror = e => {
                reject(e);
                this.onError(e);
            };
            this.ws.onclose = this.onClose.bind(this);
        });
    }
    /**
     * Create a Custom Channel
     * @param service
     * @returns {MediaChannel}
     * @public
     */
    createChannel(service) {
        // todo: Manage duplicate channel
        let channel = new Channel(service);
        channel.setSocket(this.ws);
        this.channels[service] = channel;
        return channel;
    }
    /**
     * Return a MediaChannel
     * @returns {MediaChannel}
     * @public
     */
    getMediaChannel() {
        return this.getChannel(MediaChannel.NAMESPACE);
    }
    /**
     * Return WebappChannel
     * @returns {WebappChannel}
     * @public
     */
    getWebappChannel() {
        return this.getChannel(WebappChannel.NAMESPACE);
    }
    /**
     * Return Channel
     * @param {string} service Name
     * @returns {Channel}
     * @public
     */
    getChannel(service) {
        return this.channels[service];
    }
    /**
     * Initialize MediaChannel
     * @private
     */
    setupChannel(channel) {
        this.channels[channel.name] = channel;
    }
    /**
     * Initialize MediaChannel
     * @private
     */
    setupMediaChannel() {
        let channel = new MediaChannel();
        this.channels[channel.name] = channel;
    }
    /**
     * Initialize MediaChannel
     * @private
     */
    setupWebappChannel() {
        let channel = new WebappChannel();
        this.channels[channel.name] = channel;
    }
    /**
     * publish message on internal Bus
     * @param {Transport} transport - transport Message
     * @private
     */
    publish(transport) {
        if (this.channels.hasOwnProperty(transport.message.service)) {
            let channel = this.channels[transport.message.service];
            channel.onMessage(transport);
        } else {
            Log$5.warn("Unknown namespace <<<" + transport.message.service + ">>>");
            let message = new Transport(transport.dst, transport.src, exports.EnumTransport.REPLY, transport.id, new TransportMessage(transport.message.service, {
                params: { code: exports.EnumError.INVALID_NAMESPACE }
            }));
            this.ws.send(JSON.stringify(message));
        }
    }
    /**
     * Handler to receive messages
     * @param event
     * @private
     */
    onMessage(event) {
        Log$5.debug(TAG$4 + "receive message : " + event.data);
        if (event.data.type === exports.EnumTransport.REPLY && event.data.status !== "ok") {
            Log$5.error(TAG$4 + "receive error message : " + event.data.status);
            return;
        }
        let message = JSON.parse(event.data);
        try {
            this.publish(message);
        } catch (e) {
            // todo: Catch a better way internal Errors (with call stack)
            console.error("Uncaught exception" + e);
        }
    }
    onError(error) {
        Log$5.info(TAG$4 + "receive error event : ", error);
    }
    onClose(close) {
        Log$5.info(TAG$4 + "websocket is closed ");
    }
    /**
     * Send Connected Event when Connection Opened
     * @param event
     */
    onConnected() {
        Log$5.info(TAG$4 + "websocket onConnected event");
        this.updateSocketChannel();
    }
    /**
     * Set websocket on all channels
     * @private
     */
    updateSocketChannel() {
        for (let key in this.channels) {
            if (this.channels.hasOwnProperty(key)) {
                let channel = this.channels[key];
                channel.setSocket(this.ws);
            }
        }
    }
}

/*
 * Copyright 2017 Orange
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @module
 * @description
 * Entry point for ocast module.
 */

exports.Channel = Channel;
exports.MediaChannel = MediaChannel;
exports.WebappChannel = WebappChannel;
exports.Media = Media;
exports.VideoMedia = VideoMedia;
exports.ImageMedia = ImageMedia;
exports.PlaybackStatus = PlaybackStatus;
exports.Metadata = Metadata;
exports.VideoPlaybackStatus = VideoPlaybackStatus;
exports.Logger = Logger;
exports.OCast = OCast;
exports.Transport = Transport;

return exports;

}({}));
//# sourceMappingURL=ocast.es5.js.map
