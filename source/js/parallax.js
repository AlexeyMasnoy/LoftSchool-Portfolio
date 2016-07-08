// ==============================
// Parallax
// ==============================
$(window).scroll(function() {
  var wScroll = $(window).scrollTop();

  var ScrollParallax = (function () {
    var bg = $('.head__svg__parallax'),
        bgimage = $('.header__svg__bg'),
        user = $('.selfbox-head-about');

        slideIn(bg, -wScroll / 25);
        slideIn(bgimage, wScroll / 20);
        slideIn(user, wScroll / 15);

    function slideIn(block, strafeAmount) {

      var strafe = -strafeAmount + '%',
          transformString = 'translate3d(0,' + strafe + ',0';

          block.css({
          'transform' : transformString
        });
      } 

    

  }());
});

//   var ScrollParallax = (function () {

//     var 
//         wScroll = $(window).scrollTop(),
//         bg = $('.head__svg__parallax'),
//         bgimage = $('.parallax__img'),
//         user = $('.selfbox-head-about');

//     function init () {
//       _setUpListners();
//     };

//     function _setUpListners () {
//       $(window).on('scroll', _slideIn(bg, -wScroll / 45))
//     };

//       function _slideIn(block, strafeAmount) {
            
//             var strafe = -strafeAmount + '%',
//                 transformString = 'translate3d(0,' + strafe + ',0';

//                 block.css({
//                 'transform' : transformString
//               });
//       };

//       return {
//       init: init
//       }; 

//   })();

// ScrollParallax.init();