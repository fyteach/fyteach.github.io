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
