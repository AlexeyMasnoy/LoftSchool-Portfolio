(function() {
  'use strict';

  Preloader.init();
  Menu.init()

  if (window.location.pathname == '/index.html' || window.location.pathname == '/') {

    Parallax3d.init();
    Flipping.init();
  }

  if (window.location.pathname == '/blog.html') {

    Scrollmenu.init();
  }

  if (window.location.pathname == '/work.html') {

    Blur.init();
    Slider.init();
  }

  if (window.location.pathname == '/about.html') {
    AnimationSkills.init();
  }

})();

