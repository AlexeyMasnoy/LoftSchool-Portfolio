// ==============================
// Slider 
// ==============================

var Slider = (function () {

  var 
    container = $('.container__right-works'),
    images = [];


  function _setUpListeners() {
    $('.container__left-slide_1').on('click', _NextPage());
    $('.container__right-slide_2').on('click', _PrevPage())
  }

  function _NextPage() {
    var imgNumber = container.find('img').data('number');
      imgNumber++;
      var imgElement = '<img src="' + images[imgNumber] + 'data-number=' + imgNumber + '" />';
      container.append(imgElement);
  }

  function _PrevPage() {
    var imgNumber = container.find('img').data('number');
      imgNumber--;
      var imgElement = '<img src="' + images[imgNumber] + 'data-number=' + imgNumber + '" />';
      container.append(imgElement);
  }

  return {
    init: function () {
      _setUpListeners();
    }
  }
})();

Slider.init();

