$(function() {
  $('.js-mobile-menu').click(function(event) {
    $('.nav-mobile').toggleClass('show');
    $('.body-wrapper').toggleClass('show');
  });
  $('.js-button-x').click(function(event) {
    $('.nav-mobile').removeClass('show');
    $('.body-wrapper').removeClass('show');
  });
  $('.navmobile-collection').slideUp();
  $('.js-collection').click(function(event) {
    $(this).toggleClass('bg-color-change')
    $('.navmobile-collection').slideToggle();
  });
  $('.js-subtoggle').slideUp();
  $('.js-subtoggle-item').click(function(event) {
    $(this).find('.js-subtoggle').slideToggle();
  });
  $('.js-trending').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 2
      },
      576: {
        items: 2
      },
      768: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  });
  $('.js-instagram').owlCarousel({
    loop: false,
    margin: 0,
    mouseDrag: true,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 3
      },
      1200: {
        items: 5
      }
    }
  });
  $('.js-brand').owlCarousel({
    loop: false,
    margin: 0,
    mouseDrag: true,
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 3
      },
      1200: {
        items: 5
      }
    }
  });
});
