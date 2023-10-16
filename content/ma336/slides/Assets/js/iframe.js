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
