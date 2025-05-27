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

$('body').on('click','#iframe', function(){
  var url = $("#iframe")..src;
  var tabOrWindow = window.open(url, '_blank');
  tabOrWindow.focus();
});