(function($){
  "use strict";

	// ______________ SUPERFISH
	jQuery('#navigation').superfish({
	      speed : 1,
	      animation: false,
	      animationOut: false
	});

	// ______________ MOBILE MENU

	 $(function(){
	       $('#navigation').slicknav({
            label: "",
	          closedSymbol: "&#8594;",
	          openedSymbol: "&#8595;"
	});
	});

// ______________ HOME PAGE WORDS ROTATOR
$("#js-rotating").Morphext({
    animation: "bounceInLeft",
    separator: ",",
    speed: 6000
});
$('#js-rotating').show();

// ______________ ANIMATE EFFECTS
var wow = new WOW(
  {
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       0,
    mobile:       false
  }
);
wow.init();


// SMOOTH SCROLL________________________//

$(function() {
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// ______________ BACK TO TOP BUTTON

$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('#back-to-top').fadeIn('slow');
    } else {
      $('#back-to-top').fadeOut('slow');
    }
  });
$('#back-to-top').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });


        $(document).foundation();

// ______________ POPUP MODAL

$('.close-reveal-modal').click(function(){
  popup.close();
});


})(jQuery);
