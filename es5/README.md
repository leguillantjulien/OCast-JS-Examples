# introduction
This is the minimalist receiver for orange stick

* play video streams

* display image

* play audio streams

* volume

## video
* mp4 : http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4


    {
        command: 'sendMessageToBrowser',
        params: {
            message: '{
            "senderId": "MC-C02LJ1EXFFT3",
            "namespace": "com.orange.cast.media",
            "data": {
                "type": "LOAD",
                "src": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                "autoplay": true,
                "content_info": {
                    "content_id": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                    "stream_type": 1,
                    "mime_type": "video/mp4",
                    "meta_data": {
                        "title": "Big Buck Bunny",
                        "artist": "Blender Foundation",
                        "subtitle": "Blender Foundation",
                        "images": [{
                            "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images_480x270/BigBuckBunny.jpg",
                            "width": 200,
                            "height": 100
                        }],
                    },
                }
                "cmd_id": 1448543848459
            }
        },
         sequence: 1448548794555,
         class: 'comms'
     }
     
* smooth streaming LIVE // ARTE : http://2is7server2.rd.francetelecom.com/C4/C4-52_S2.isml/Manifest


    {
        command: 'sendMessageToBrowser',
        params: {
            message: '{
                "senderId": "MC-C02LJ1EXFFT3",
                "namespace": "com.orange.cast.media",
                "data": {
                    "type": "LOAD",
                    "src": "http://2is7server2.rd.francetelecom.com/C4/C4-52_S2.isml/Manifest",
                    "autoplay": true,
                    "content_info": {
                        "content_id": "http://2is7server2.rd.francetelecom.com/C4/C4-52_S2.isml/Manifest",
                        "stream_type": 2,
                        "mime_type": "text/xml",
                        "meta_data": {
                            "title": "Arte Smoothstreaming",
                            "images": [
                                {
                                    "url": "http://www.enquete-debat.fr/wp-content/uploads/2013/05/arte-logo.png",
                                    "width": 200,
                                    "height": 75
                                }
                            ]
                        },
                      
                    },
                    "cmd_id": 1448548794555
                }
            }'
        },
        sequence: 1448548794555,
        class: 'comms'
    }
    
* smooth streaming BUFFER // MICROSOFT : http://playready.directtaps.net/smoothstreaming/TTLSS720VC1/To_The_Limit_720.ism/Manifest


    {
        command: 'sendMessageToBrowser',
        params: {
            message: '{
                "senderId": "MC-C02LJ1EXFFT3",
                "namespace": "com.orange.cast.media",
                "data": {
                    "type": "LOAD",
                    "src": "http://playready.directtaps.net/smoothstreaming/TTLSS720VC1/To_The_Limit_720.ism/Manifest",
                    "autoplay": true,
                    "content_info": {
                        "content_id": "http://playready.directtaps.net/smoothstreaming/TTLSS720VC1/To_The_Limit_720.ism/Manifest",
                        "stream_type": 2,
                        "mime_type": "text/xml",
                        "meta_data": {
                            "title": "Microsof reference",
                            "images": [
                                {
                                    "url": "http://cdn.soundandvision.com/images/032411sony.jpg",
                                    "width": 250,
                                    "height": 108
                                }
                            ]
                        }
                    }
                    "cmd_id": 1448549132576
                }
            }'
        },
        sequence: 1448549132576,
        class: 'comms'
    }

* HLS LIVE // France2 : http://live.francetv.fr/simulcast/France_2/hls_v1/index.m3u8


    {
        command: 'sendMessageToBrowser',
        params: {
            message: '{
                "senderId": "MC-C02LJ1EXFFT3",
                "namespace": "com.orange.cast.media",
                "data": {
                    "type": "LOAD",
                    "src": "http://live.francetv.fr/simulcast/France_2/hls_v1/index.m3u8",
                    "autoplay": true,
                    "content_info": {
                        "content_id": "http://live.francetv.fr/simulcast/France_2/hls_v1/index.m3u8",
                        "stream_type": 2,
                        "mime_type": "application/x-mpegURL",
                        "meta_data": {
                            "title": "F2 HLS",
                            "images": [
                                {
                                    "url": "http://static.francetv.fr/arches/france2/default/img/og-image.jpg?20151104",
                                    "width": 200,
                                    "height": 200
                                }
                            ]
                        }
                    },
                    "cmd_id": 1448549518852
                }
            }'
        },
        sequence: 1448549518852,
        class: 'comms'
    }
    
    
## image : "mime_type": "image/"
* image // logo ORANGE: http://cdn-orange.com/businesslounge/prod/bundles/orangelounge/images/orange-logo.jpg


    {
        command: 'sendMessageToBrowser',
        params: {
            message: '{
                "senderId": "MC-C02LJ1EXFFT3",
                "namespace": "com.orange.cast.media",
                "data": {
                    "type": "LOAD",
                    "src": "http://cdn-orange.com/businesslounge/prod/bundles/orangelounge/images/orange-logo.jpg",
                    "content_info": {
                        "content_id": "http://cdn-orange.com/businesslounge/prod/bundles/orangelounge/images/orange-logo.jpg",
                        "mime_type": "image/",
                        "meta_data": {
                            
                        }
                    },
                    "cmd_id": 1448549742587
                }
            }'
        },
        sequence: 1448549742587,
        class: 'comms'
    }

## audio : "mime_type": "audio/"
* audio  // MP3 : http://datashat.net/music_for_programming_28-big_war.mp3


    {
        command: 'sendMessageToBrowser',
        params: {
            message: '{
                "senderId": "MC-C02LJ1EXFFT3",
                "namespace": "com.orange.cast.media",
                "data": {
                    "type": "LOAD",
                    "src": " http://datashat.net/music_for_programming_28-big_war.mp3",
                    "autoplay": true,
                    "content_info": {
                        "content_id": " http://datashat.net/music_for_programming_28-big_war.mp3",
                        "mime_type": "audio/",
                        "meta_data": {
                            
                        }
                    }
                    "cmd_id": 1448549834473
                }
            }'
        },
        sequence: 1448549834473,
        class: 'comms'
    }
    
## volume

### 0.5


    {
        "command": "sendMessageToBrowser",
        "params": {
           "message": "{
               \"senderId\": \"MC-C02LJ1EXFFT3\",
               \"namespace\": \"com.orange.cast.media\",
               \"data\": {
                   \"type\": \"VOLUME\",
                   \"volume\": 0.5,
                   \"muted\": false,
                   \"cmd_id\": 1448550931432
               }
           }",
           "sender_id": "0518af09-2baa-444d-ab00-fd32631ddab2"
        },
        "sequence": 1448550931432,
        "class": "comms"
    }

### mute


    {
        "command": "sendMessageToBrowser",
        "params": {
            "message": "{\"senderId\":\"MC-C02LJ1EXFFT3\",\"namespace\":\"com.orange.cast.media\",\"data\":{\"type\":\"VOLUME\",\"muted\":true,\"cmd_id\":1448552771392}}",
            "sender_id": "b0ddc261-fda1-4d0f-b8be-9626cd722f99"
        },
        "sequence": 1448552771392,
        "class": "comms"
    }

### unmute


    {
        "command": "sendMessageToBrowser",
        "params": {
            "message": "{\"senderId\":\"MC-C02LJ1EXFFT3\",\"namespace\":\"com.orange.cast.media\",\"data\":{\"type\":\"VOLUME\",\"muted\":false,\"cmd_id\":1448552806181}}",
            "sender_id": "41a05992-c6c9-4090-9d2d-336df134a7d3"
        },
        "sequence": 1448552806181,
        "class": "comms"
    }


