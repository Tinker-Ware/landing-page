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


var googleforms_popup = new Foundation.Reveal($('#googleforms-modal'));

$('#googleforms-action').click(function(){
  googleforms_popup.open();
});

$('.close-googleforms-modal').click(function(){
  googleforms_popup.close();
});

var video_popup = new Foundation.Reveal($('#video-modal'));

$('#video-action').click(function(){
  video_popup.open();
});

$('.close-video-modal').click(function(){
  video_popup.close();
});

})(jQuery);

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-86896105-1', 'auto');
ga('send', 'pageview');


// Facebook Pixel Code
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '663531177160564');
fbq('track', 'PageView');
