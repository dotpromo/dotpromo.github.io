// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
// Wrapping, self invoking function prevents globals
$( document ).ready(function() {
    (function() {
        // Hide the elements initially
        var lis = $('.item').hide().addClass('animated bounceInUp');

        // When some anchor tag is clicked. (Being super generic here)
        $('.item').ready(function() {
            var i = 0;

            // FadeIn each list item over 200 ms, and,
            // when finished, recursively call displayImages.
            // When eq(i) refers to an element that does not exist,
            // jQuery will return an empty object, and not continue
            // to fadeIn.
            (function displayImages() {
                lis.eq(i++).fadeIn(200, displayImages);
            })();
        });
    })();
});


