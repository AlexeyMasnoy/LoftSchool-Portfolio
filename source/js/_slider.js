// // ==============================
// // Slider 
// // ==============================

// var Slider = (function () {

//   var 
//     container = $('.container__right-works'),
//     images = [];

//     console.log(container, images);
//   function _setUpListeners() {
//     $('.container__left-slide_next').on('click', _NextPage());
//     $('.container__left-slide_prev').on('click', _PrevPage())
//   }

//   function _NextPage() {
//     var imgNumber = container.find('img').data('number');
//       imgNumber++;
//       var imgElement = '<img src="' + images[imgNumber] + 'data-number=' + imgNumber + '" />';
//       container.append(imgElement);
//       console.log(imgNumber);
//       console.log(imgElement);
//   }

//   function _PrevPage() {
//     var imgNumber = container.find('img').data('number');
//       imgNumber--;
//       var imgElement = '<img src="' + images[imgNumber] + 'data-number=' + imgNumber + '" />';
//       container.append(imgElement);
//   }

//   return {
//     init: function () {
//       _setUpListeners();
//     }
//   }
// })();

// Slider.init();

