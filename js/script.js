$(document).ready(function(){

  /* parallax background */
  $('.promo').parallax();
  $('.promo-alt').parallax();
  $('.promo-02').parallax();
  $('.promo-03').parallax();
  $('.promo-04').parallax();

  /* scrolltop */
  $('.navbar-nav li a, .menus').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 500, 'easeInOutExpo');
    event.preventDefault();
  });

  /* scrollspy highlighting active navbar menu */
	$('body').scrollspy({
	    target: '.navbar-fixed-top'
	})

  /* close navbar collapse after click in mobile */
	$('.navbar-collapse ul li a').click(function() {
	    $('.navbar-toggle:visible').click();
	});

	/* map contact */
  // $("#map").gmap3({
  //   map: {
  //       options: {
  //         center: [-7.866315,110.389574],
  //         zoom: 12,
  //         scrollwheel: false
  //       }
  //    },
  //   marker:{
  //       latLng: [-7.866315,110.389574],
  //       options: {
  //        icon: new google.maps.MarkerImage(
  //          "https://dl.dropboxusercontent.com/u/29545616/Preview/location.png",
  //          new google.maps.Size(48, 48, "px", "px")
  //        )
  //       }
  //    }
  // });

});
