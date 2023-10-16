//initialize slideshow
var slideshow = remark.create();

$(function()  {
    setRemarkSizes();
    $(window).resize(function() {
        setRemarkSizes();
    });
});

//take care of IE problem and resizing
function setRemarkSizes() {
    $('.remark-slide-scaler').height($(window).height())
                                           .width($(window).width())
                                           .css('top', '0px')
                                           .css('left', '0px')
                                           .css('-webkit-transform', 'none');
}