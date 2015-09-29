


(function(module) {
	"use strict";
    
     console.log("video starten"); 
     
	var VideoPlayer = {}, 
	    type = "",	 
	    embed  = "",	    
		 // embed  = '<div class="playit" data-link="/uploads/files/$1" data-name="$2" ><i class="fa fa-play">&nbsp;&nbsp;</i>$2</div>',
		 embedUrl_ogg = /<a href=".*\/uploads\/files\/(\w*-(.*\.ogv)).*>.*<\/a>/ig,  // regex ogg
       embedUrl_mp4  = /<a href=".*\/uploads\/files\/(\w*-(.*\.mp4)).*>.*<\/a>/ig,   // regex mp4
       embedUrl_mov  = /<a href=".*\/uploads\/files\/(\w*-(.*\.mov)).*>.*<\/a>/ig,   // regex mov
       embedUrl_webm  = /<a href=".*\/uploads\/files\/(\w*-(.*\.webm)).*>.*<\/a>/ig;   // regex webm

  
	VideoPlayer.parse = function(data, callback) { 
	    if (!data || !data.postData || !data.postData.content) { 
            return callback(null, data);
        }
        
        // ogg
        if (data.postData.content.match(embedUrl_ogg)) {
           console.log("video/ogg");  embed  = "";
            embed  += ' <div class="videoContBox"  data-src="$1" data-type="video/ogg" data-codec="theora, vorbis" ><a class="btn btn-danger" href="#"><i class="fa fa-play fa-lg"></i> im Videoplayer öffnen </a>';
            embed  += '    <br><video class="vplayer" width="640" height="360" poster="/static/poster.jpg" preload controls>';
            embed  += '     <source src="/uploads/files/$1" type=\'video/ogg; codecs="theora, vorbis"\' />';
            embed  += ' </video></div>'; 
         
            data.postData.content = data.postData.content.replace(embedUrl_ogg, embed);
        }
        // mp4
         if (data.postData.content.match(embedUrl_mp4)) {
            console.log("video/mp4");  embed  = "";
             embed  += ' <div class="videoContBox"  data-src="$1" data-type="video/mp4" data-codec="avc1.42E01E, mp4a.40.2" ><a class="btn btn-danger" href="#"><i class="fa fa-play fa-lg"></i> im Videoplayer öffnen </a>';
             embed  += '   <br><video class="vplayer" width="640" height="360" poster="/static/poster.jpg" preload controls>';
             embed  += '  	  <source src="/uploads/files/$1" type=\'video/mp4; codecs="avc1.42E01E, mp4a.40.2"\' />';
             embed  += '  </video></div>';
            data.postData.content = data.postData.content.replace(embedUrl_mp4, embed);
        }
        // mov
         if (data.postData.content.match(embedUrl_mov)) {
         console.log("video/mov");  embed  = "";
            embed  += ' <div class="videoContBox" data-src="$1" data-type="video/mp4" data-codec="avc1.42E01E, mp4a.40.2" ><a class="btn btn-danger" href="#"><i class="fa fa-play fa-lg"></i> im Videoplayer öffnen </a>';
            embed  += '    <br><video class="vplayer" width="640" height="360" poster="/static/poster.jpg" preload controls>';
            embed  += '  	  <source src="/uploads/files/$1" type=\'video/mp4; codecs="avc1.42E01E, mp4a.40.2"\' />';
            embed  += ' </video></div>';
            data.postData.content = data.postData.content.replace(embedUrl_mov, embed);
        }
        // webm
         if (data.postData.content.match(embedUrl_webm)) {
            console.log("video/webm");  embed  = "";
            embed  += ' <div class="videoContBox"  data-src="$1" data-type="video/webm" data-codec="vp8, vorbis" ><a class="btn btn-danger" href="#"><i class="fa fa-play fa-lg"></i> im Videoplayer öffnen </a>';
            embed  += '   <br><video class="vplayer" width="640" height="360" poster="/static/poster.jpg" preload controls>';
            embed  += '     <source src="/uploads/files/$1" type=\'video/webm; codecs="vp8, vorbis"\' />';
	         embed  += ' </video></div>';
            data.postData.content = data.postData.content.replace(embedUrl_webm, embed);
        }


        callback(null, data);
    };
    
    
    

	module.exports = VideoPlayer;
}(module));
