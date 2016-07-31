var AnimationSkills = (function() {

    function init () {
      _setUpListners();
    };

    function _setUpListners () {
      $(window).on('scroll', _scroll);
    };

    function _scroll(e) {
      
      windowScroll = $(window).scrollTop();
      skillsContainerTop = $('.container__right').offset().top - 200;

      if (windowScroll > skillsContainerTop) {
        _SkillsShow();
      }
    };

    function _SkillsShow() {

      var arc, circumference,
          time = 0,
          delay = 150;

      $('.circle__ring').each(function (i, el) {
        var arc = Math.ceil($(el).data('arc')),
            circumference = Math.ceil($(el).data('circumference'));

        setTimeout(function () {

          $(el).closest('.about-skill__item').animate({
            'opacity': '1'
          }, 300);

          $(el).css('stroke-dasharray', arc+'px '+ circumference+'px');

        }, time += delay);


      });    
    };


    return {
      init: init
    };

})();