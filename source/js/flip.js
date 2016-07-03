// ==============================
// Flipping
// ==============================
var Flipping = (function() {

  var flip = $('.flip'),
      elem = flip[0];
  console.log(elem);

  function init () {
      _setUpListners();
  };

  function _setUpListners() {
    $('.login').on('click', _flipping)
  };

  function _flipping(e) {
    e.preventDefault();
    flip.toggleClass('flipping');
  };

  return {
      init: init
  };

})();

Flipping.init();
