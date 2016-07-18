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
      // console.log('click');
      // $('.hide-menu__icon-close').on('click', _hideMenu);
    };

    function _toggleMenu(e) {
      e.preventDefault();
      $(this).toggleClass('open');
      console.log($(this));
      $('.hide-menu-wrapper').toggleClass('show');
    };

    // function _hideMenu (e) {
    //   e.preventDefault();
    //   menu_wrapper.fadeOut('slow').css({
    //     display: 'none'
    //   })
    // };

    return {
      init: init
    };

})();

Menu.init()



    