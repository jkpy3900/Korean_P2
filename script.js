// Optional jQuery class toggle for added robustness.

/* 
var labelID;

$('.check label').click(function() {
  labelID = $(this).attr('for');
  $('#' + labelID).toggleClass('active');
}); 

$('.radio label').click(function() {
  labelID = $(this).attr('for');
  $('.radio input').removeClass('active');
  $('#' + labelID).addClass('active');
}); 
*/

var jq = $;

AOS.init();

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
        return false;
      }
    }
  });
});