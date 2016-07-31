// ==============================
// Menu
// ==============================
var Menu = (function() {

  var hamburger = $('.hide-menu__hamburger');


    function init () {
      _setUpListners();
    };

    function _setUpListners () {
      hamburger.on('click', _toggleMenu);
    };

    function _toggleMenu(e) {
      e.preventDefault();
      $(this).toggleClass('open');
      // console.log($(this));
      $('body').toggleClass('overfow-hidden');
      $('.hide-menu-wrapper').toggleClass('show');
    };

    return {
      init: init
    };

})();





    