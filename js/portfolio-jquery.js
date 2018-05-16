$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.nav');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.portfolio-header').css('background-color', 'rgba(48,48,48,0.90)');
		  $('.navbar-collapse').css('background-color', 'rgba(0,0,0,0.0)');
		  $('.nav-link').css('color', 'rgba(255,255,255,0.8)');
       } else {
          $('.portfolio-header').css('background-color', 'transparent');
		  $('.navbar-collapse').css('background-color', 'transparent');
		  $('.nav-link').css('color', 'rgba(255,255,255,1.0)');
       }
   });
});

//smooth-scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});