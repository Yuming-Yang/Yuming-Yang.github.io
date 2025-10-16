/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button[data-nav-toggle]'); // Only select the dropdown toggle button
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function updateNav() {
  var $themeToggle = $('#theme-toggle');
  var themeToggleWidth = $themeToggle.length ? $themeToggle.outerWidth() : 0;
  var dropdownBtnWidth = $btn.hasClass('hidden') ? 0 : $btn.outerWidth();
  var availableSpace = $nav.width() - dropdownBtnWidth - themeToggleWidth - 30;

  // The visible list is overflowing the nav
  if($vlinks.width() > availableSpace) {

    while ($vlinks.width() > availableSpace && $vlinks.children('*:not(.masthead__menu-item--lg)').length > 0) {

      // Record the width of the list
      breaks.push($vlinks.width());

      // Move item to the hidden list
      $vlinks.children('*:not(.masthead__menu-item--lg)').last().prependTo($hlinks);

      // Recalculate available space
      dropdownBtnWidth = $btn.hasClass('hidden') ? 0 : $btn.outerWidth();
      availableSpace = $nav.width() - dropdownBtnWidth - themeToggleWidth - 30;
      
      // Show the dropdown btn
      if($btn.hasClass('hidden')) {
        $btn.removeClass('hidden');
      }
    }

    // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    while(breaks.length > 0 && availableSpace > breaks[breaks.length-1]) {
      // Move the item to the visible list
      $hlinks.children().first().appendTo($vlinks);
      breaks.pop();
      // Recalculate available space after moving item back
      dropdownBtnWidth = $btn.hasClass('hidden') ? 0 : $btn.outerWidth();
      availableSpace = $nav.width() - dropdownBtnWidth - themeToggleWidth - 30;
    }

    // Hide the dropdown btn if hidden list is empty
    if(breaks.length < 1) {
      $btn.addClass('hidden');
      $btn.removeClass('close');
      $hlinks.hide();
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

}

// Window listeners

$(window).on('resize', function() {
  updateNav();
});
screen.orientation.addEventListener("change", function(){
  updateNav();
});

$btn.on('click', function() {
  $hlinks.fadeToggle("fast", function() {});
  $(this).toggleClass('close');
});

updateNav();