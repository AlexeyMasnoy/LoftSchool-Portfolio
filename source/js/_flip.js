// ==============================
// Flipping
// ==============================
var Flipping = (function() {

  var isWelcomeFlipped = false,
      flip = $('.flip-container'),
      triggerButton = $('.login');

  function init () {
      _setUpListners();
  };

  function _setUpListners() {
    triggerButton.on('click', _showLogin);
    $('#main-welcome, .footer-1').on('click', _prepareToHide);
    // triggerButton.on('click', _hideLogin);
  };

  function _showLogin(e) {
    e.preventDefault();
    isWelcomeFlipped = true;
    flip.addClass('flip');
    triggerButton.fadeTo(300, 0).css('visibility', 'hidden');
  };

  function _prepareToHide(e) {
      // если кликаем на карточке, то переворачивать не надо
      if (e.target.closest('.welcome__card') !== null) {
        return;
      }
      // если карточка уже перевернута,
      if (isWelcomeFlipped 
        // и мы кликнули не по кнопке "Авторизоваться"
        && e.target.id != triggerButton.attr('id')
        ) {
        // то переворачиваем обратно
        _hideLogin(e);
      }
  };

  function _hideLogin(e) {
    e.preventDefault();
    flip.removeClass('flip');
    triggerButton.fadeTo(300, 1, function(){
      triggerButton.css('visibility', 'visible');
    });
  };

  return {
      init: init
  };

})();


