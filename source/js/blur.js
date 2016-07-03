// ==============================
// Blur 
// ==============================
var Blur = (function () {

  function init() {
    _setUpListeners();
  };

  function _setUpListeners() {
    $(document).ready(function() {
      blur();
    });

    $(window).resize(function() {
      blur();
    });
  };

  function blur() {
    var 
      imagewidth = $('#main-work').width(),
      blur = $('.tell-about-me__Blur-bg'),
      blurSection = $('#main-work'),
      positionTop = blurSection.offset().top - blur.offset().top,
      posLeft = blurSection.offset().left - blur.offset().left;

      blur.css({
      'background-size' : imagewidth + 'px' + ' ' + 'auto',
      'background-position' : posLeft + 'px' + ' ' + positionTop + 'px'
      });
    };

    return {
      init: init
    }
})();

Blur.init();


