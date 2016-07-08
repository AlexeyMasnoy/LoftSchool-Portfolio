// ==============================
// Blogmenu
// ==============================

var Scrollmenu = (function () {

  var sidebar = $('.blog-aside'),
      section = $('.container__post'),
      sidebarlink = $('.blog-aside__link');
  
  function init () {
      _setUpListners();
  };

  function _setUpListners() {
    $(window).on('scroll', _scrollmenu);
    sidebarlink.on('click', _linkmenu);
  };

  function _scrollmenu(e) {
    var scroll = $(window).scrollTop();

    if(scroll > 400) {
      sidebar.css({position: "fixed", top: 50});
    }else {
      sidebar.css({position: "relative", top: 0});
    }

    section.each(function(index, elem) {
      var topEdge = $(elem).offset().top - scroll,
          bottomEdge = topEdge + $(elem).height();
      console.log(scroll + " :" + topEdge + " :" + bottomEdge);    
      
      if (topEdge < 100 && bottomEdge > 100) {
      sidebarlink.removeClass('blog-aside__active');
      $('#item' + index).addClass('blog-aside__active');
      }
      
      console.log(sidebarlink);
      })
    };

  function _linkmenu(e) {
    e.preventDefault();
    var link = $(e.target),
        id = link.data('id'),
        top = section.eq(id).offset().top;
        $(window).scrollTop(top);
        sidebarlink.removeClass('blog-aside__active');
        link.addClass('blog-aside__active');

  };

    
  return {
      init: init
  };

})();

Scrollmenu.init();