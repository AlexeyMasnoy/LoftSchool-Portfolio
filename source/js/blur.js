// ==============================
// Blur 
// ==============================
var Blur = (function () {

  function init() {
    _setUpListeners();
  };

  function _setUpListeners() {
    $(window).on('load resize', _blur);
  };

  function _blur() {
    var
      blurSection = $('.blur__bg'), 
      imagewidth = $('.blur__bg').width(),
      blur = $('.tell-about-me__Blur-bg'), 
      positionTop = blurSection.offset().top - blur.offset().top,
      posLeft = blurSection.offset().left - blur.offset().left;

      blur.css({
      'background-size' : imagewidth + 'px' + ' ' + 'auto',
      'background-position' : posLeft + 'px' + ' ' + positionTop + 'px'
      });
      console.log('Ширина изоображения: ' + imagewidth, 'Позиция слева : ' + posLeft, 'Позиция сверху: ' + positionTop);
    };

    return {
      init: init
    }
})();

Blur.init();


