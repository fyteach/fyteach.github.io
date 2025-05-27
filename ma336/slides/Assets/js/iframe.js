// $(document).ready(function(){
//     $("iframe").load( function () {
//         var c = (this.contentWindow || this.contentDocument);
//         if (c.document) d = c.document;
//         var ih = $(d).outerHeight();
//         var iw = $(d).outerWidth();
//         $(this).css({
//             height: ih,
//             width: iw
//         });
//     });
// });

$("#iframe").css('padding-right', $('#iframe').outerWidth - $('#iframe').innerWidth);

// Resize MoM

$(function() {
  $(window).on("message", function(e) {
      if (typeof e.originalEvent.data=='string' && e.originalEvent.data.match(/lti\.frameResize/)) {
          var edata = JSON.parse(e.originalEvent.data);
          if ("frame_id" in edata) {
              $("#"+edata["frame_id"]).height(edata.height);
              $("#"+edata["frame_id"]+"wrap").height(edata.wrapheight);
          }
      }
  }); 
});