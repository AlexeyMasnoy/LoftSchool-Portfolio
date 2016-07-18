// ==============================
// Preloader
// ==============================

var Preloader = (function () {
  var imgs = [];

  function init () {
      _setUpListners();
  };

  function _setUpListners() {
    $(document).ready(_countImg);
    $(document).ready(_onload);
  };



function _countImg() {
  $('*').each( _findImg);
    
  function _findImg() {
      
  var $this = $(this),
        backgrounImg = $this.css('background-image'),
        img = $this.is('img');
      
    if (backgrounImg != 'none') {
      var path = backgrounImg.replace('url("', '').replace('")', '');
      imgs.push(path);
      }
      
    if (img) {
      var path = $this.attr('src');

      if (path) {
        imgs.push(path);
       }
     }
      // console.log('Картинки: ' + imgs);
      // console.log('Длина массива: ' + imgs.length);
  };
};

function _onload() {
  var loaded = 1;
  for (var i = 0; i < imgs.length; i++) {
        var image = $('<img>', {
          attr: {
            src: imgs[i]
          }
        });

      
      $(image).load(function() {
          loaded++;
          var percentLoader = _countPercent(loaded, imgs.length);
          _setPercent(percentLoader);
          // console.log('Проценты и длинна массива: ' + loaded, imgs.length);  
        });
    };
    
    function _countPercent(current, total) {
      return Math.ceil( current / total * 100);
    }            
            
    function _setPercent(percent) {
      // console.log('Проценты: ' + percent);
      // $('.preloader__body').css('display', 'block');
      $('.preloader__value').text(percent + '%');
      if(percent >= 100) {
          
          $('.preloader__body').css('display', 'none');
      }
    }

};

  return {
      init: init
  }


})();

Preloader.init();