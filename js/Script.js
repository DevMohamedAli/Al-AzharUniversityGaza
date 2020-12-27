$(document).ready(function () {
    if ($(window).width() > 991){
    $('.navbar-light .d-menu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).delay(120).slideUp(100);
        });
        }
    });

    // carousel
    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    // end of carousel
    // connect us form
    AOS.init();
    (function($) {
      "use strict"; 
      $(".cool-b4-form .form-control").on("input", function() {
        if ($(this).val()) {
          $(this).addClass("hasValue");
        } else {
          $(this).removeClass("hasValue");
        }
      });
    })(jQuery); 
    (function ($) {
       "use strict"
       $('a').click(function (e) {
         $('a').removeClass('activeLink');
         $(this).addClass('activeLink');
          
         
       })
      
    })(jQuery);

(function() {
  var app = {
    'routes': {
      'viwe': {
        'rendered': function() {
          app.preventScroll();
        }
      },
      'about-unv': {
        'rendered': function() {
          app.preventScroll();
        }
      },
      'Drahmed': {
        'rendered': function() {
          app.preventScroll();
        }
      },
      'PrCouncil': {
        'rendered': function() {
          app.preventScroll();
        }
      },
      'UnvCouncil': {
        'rendered': function() {
          app.preventScroll();
        }
      },
      'den': {
        'rendered': function() {
          app.preventScroll();
        }
      },
      'pha': {
        'rendered': function() {
          app.preventScroll();
        }
      },
      'eng': {
        'rendered': function() {
          app.preventScroll();
        }
      },
      'ams': {
        'rendered': function() {
          app.preventScroll();
        }
      },
      'the-default-view': {
        'rendered': function() {
          app.preventScroll();
        }
      },
    },
    'default': 'the-default-view',
    'preventScroll': function() {
      document.querySelector('html').scrollTop = 0;
      document.querySelector('body').scrollTop = 0;
    },
    'routeChange': function() {
      app.routeID = location.hash.slice(1);
      app.route = app.routes[app.routeID];
      app.routeElem = document.getElementById(app.routeID);
      app.route.rendered();
    },
    'init': function() {
      window.addEventListener('hashchange', function() {
        app.routeChange();
      });
      if (!window.location.hash) {
        window.location.hash = app.default;
      } else {
        app.routeChange();
      }
    }
  };
  window.app = app;
})();

app.init();