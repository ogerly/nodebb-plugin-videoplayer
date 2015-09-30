  $('document').ready(function() {
   var html = "";
  
    $(document ).on("click", ".videoContBox", function() {    
       
          
         var src 		= $(this).data("src");  // src from video of content
         var type 	= $(this).data("type");  // type 
         var codec 	= $(this).data("codec");
         
        
        
        if ( $("#videoplayerBox").attr("id") === "videoplayerBox" ) {
             
             $(".vplayer").stop();
             $("#videoplayerBox").html("");
        
        } else {
        
             $( "body" ).append('<div id="videoplayerBox"></div>');
        }
        
        
        
        var html   = "";        
            html  += '<span id="bb_user" class="inline"></span>';
            html  += ' <video class="vplayer inline" width="90" height="45" controls autoplay>';
             html  += '  	  <source src="/uploads/files/' + src + '" type=\'' + type + '; codecs="' + codec + '"\' />';
             html  += ' </video>';
           html += '<span><a class="vplayer_play btn btn-danger inline" href="#"> <i class="fa fa-pause fa-lg"></i></a></span>';
           html += '<span class="vplayer_full btn btn-danger inline" ><i class="fa fa-expand"></i></span>';
           html += '<a id="linkTContent" class="btn btn-success" href="#"></a>';
           html += ' <span><a class="btn btn-danger right" href="#"> <i class="closeVideoPlayer fa fa-times fa-lg"></i></a></span>';

       $( "#videoplayerBox" ).html(html);  
       
       
       var  topic = $(".topic-title").text(),  // topic title
            URL 	= $(location).attr('href'),  // Topic Link                 
            PHAT  = $(location).attr('pathname'), // Returns path only
            cTime = $(this).children("video").get(0).currentTime; // currentTime from video of content 
            
            console.log("time aus content=>" + cTime );
            
      /*
        USER IMAGES clone
      
      */
            
        // theme material
          if ( $( ".poster-avatar" ).length ) {
 
             var  user  = $(this).closest('div[class^="post-block"]').children().html();
            // console.log(  "theme => material" ); 
          }
          
          // theme persona
          if ( $( ".clearfix" ).length ) {
 
             var  user  = $(this).closest('.clearfix').children().children().html();
            //  console.log(  "theme => persona" );
          }
          
          // theme lavender
          if ( $( ".topic-profile-pic" ).length ) {
 
             var  user  = $(this).closest('.col-md-12').children().children().html();
                  user  = "<a href='/user/"+ $(user).attr("alt") +"'>" + user + "</a>";
             
            //  console.log(  "theme => lavender" );
          }
          
          // theme vanilla
          if ( $( ".avatar" ).length ) {
 
             var  user  	= $(this).closest('.topic-item').children().html(),
                  userURL  = $(this).closest('.topic-item').children().attr('href');
             
             user  = "<a href='"+ userURL +"'>" + user + "</a>";
              console.log(  "theme => vanilla" );
          }
          
          $("#bb_user").html(user); 
          
          vidplay(cTime);
      
           $("#linkTContent").attr("href", URL).html( topic); 
          
           $("#videoplayerBox .vplayer").get(0).currentTime = cTime;
           
              
    }); // document click
  
   
   
    function vidplay(cTime) {    
       $(document ).on("click", "#videoplayerBox .vplayer, .vplayer_play", function() {
       
            var video = $("#videoplayerBox .vplayer");
           
           if ( video.get(0).paused ){
               
               video.get(0).play();
               
               $(".vplayer_play").attr("class","vplayer_play btn btn-danger inline").html("<i class='fa fa-pause fa-lg'></i>");
                
           } else {
           
               video.get(0).pause();
              
               $(".vplayer_play").attr("class","vplayer_play btn btn-success inline").html("<i class='fa fa-play fa-lg'></i>");
            }
      });
      
      
      $(document ).on("click", ".vplayer_full", function() {       
            var video = $("#videoplayerBox .vplayer").get(0);         

          if (video.requestFullscreen) {
            video.requestFullscreen();
          } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen(); // Firefox
          } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen(); // Chrome and Safari
          }
      });
      
    }
    
     // close and remove audioplayer
      $(document ).on("click", ".closeVideoPlayer", function() {    
         $("#videoplayerBox .vplayer").get(0).pause();
         $("#videoplayerBox").remove();
     }); 
     
     
  });
  
 
