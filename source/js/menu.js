// ==============================
// Menu
// ==============================
var Menu = (function() {

  var menu_wrapper = $('.hide-menu-wrapper');

    function init () {
      _setUpListners();
    };

    function _setUpListners () {
      $('.menu__icon').on('click', _showMenu);
    
      $('.hide-menu__icon-close').on('click', _hideMenu);
    };

    function _showMenu (e) {
      e.preventDefault();
      menu_wrapper.css({
        display: 'block'
      })
    };

    function _hideMenu (e) {
      e.preventDefault();
      menu_wrapper.fadeOut('slow').css({
        display: 'none'
      })
    };

    return {
      init: init
    };

})();

Menu.init()



    