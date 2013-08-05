$(document).ready(function () {
  (function () {
    // Hide the elements initially
    var lis = $('.item').hide();

    // When some anchor tag is clicked. (Being super generic here)
    $('.item').ready(function () {
      var i = 0;

      // FadeIn each list item over 200 ms, and,
      // when finished, recursively call displayImages.
      // When eq(i) refers to an element that does not exist,
      // jQuery will return an empty object, and not continue
      // to fadeIn.
      (function displayImages() {
        lis.eq(i++).fadeIn(200, displayImages).addClass('animated fadeInLeft');
      })();
    });
  })();
  $('.backtotop').click(function (e) {
    $('html, body').animate({scrollTop: 0}, 'slow');
    e.preventDefault();
  });
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $('.backtotop').fadeIn();
    } else {
      $('.backtotop').fadeOut();
    }
  });
});


