$(function() {
  $(window).scroll(function () {
    if ($(window).scrollTop() == 0) {
      $('#top').stop(false, true).fadeOut(600);
    } else {
      $('#top').stop(false, true).fadeIn(600);
    }
  });
  $('#top').click(function(event) {
    $('body').animate({scrollTop: 0},600);
  });
  if ($('body').scrollTop() == 0) {
    $('#top').css("display", "none");
  } else {
    $('#top').css("display", "block");
  }
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
    $(this).toggleClass('bg-color-change');
    $(this).find('.navmobile-nav__icon').toggleClass('icon-rotate');
    $('.navmobile-collection').slideToggle();
  });
  $('.js-subtoggle').slideUp();
  $('.js-subtoggle-item').click(function(event) {
    $(this).next().slideToggle();
    $(this).toggleClass('icon-change')
  });
  $('.navmobile-shop').slideUp();
  $('.js-shop').click(function(event) {
    $(this).toggleClass('bg-color-change');
    $(this).find('.navmobile-nav__icon').toggleClass('icon-rotate');
    $('.navmobile-shop').slideToggle();
  });
  $('.js-subtoggle-shop').slideUp();
  $('.js-subtoggle-item-shop').click(function(event) {
    $(this).next().slideToggle();
    $(this).toggleClass('icon-change')
  });
  $('.navmobile-lookbook').slideUp();
  $('.js-lookbook').click(function(event) {
    $(this).toggleClass('bg-color-change');
    $(this).find('.navmobile-nav__icon').toggleClass('icon-rotate');
    $('.navmobile-lookbook').slideToggle();
  });
  $('.js-subtoggle-lookbook').slideUp();
  $('.js-subtoggle-item-lookbook').click(function(event) {
    $(this).next().slideToggle();
    $(this).toggleClass('icon-change')
  });
  $('.navmobile-blog').slideUp();
  $('.js-blog').click(function(event) {
    $(this).toggleClass('bg-color-change');
    $(this).find('.navmobile-nav__icon').toggleClass('icon-rotate');
    $('.navmobile-blog').slideToggle();
  });
  $('.js-subtoggle-blog').slideUp();
  $('.js-subtoggle-item-blog').click(function(event) {
    $(this).next().slideToggle();
    $(this).toggleClass('icon-change')
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
