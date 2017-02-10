$(document).ready(function () {

     $('.menu').click(function(){
        $('.mobile-nav-dropdown').toggleClass('dropdown-active');
        $('.menu').toggleClass('open');
        $('.overlay').toggleClass('overlay-active');
         $('body').toggleClass('disable-scroll');
        });

      $('.overlay').click(function(){
          $('.overlay').removeClass('overlay-active');
          $('.mobile-nav-dropdown').removeClass('dropdown-active');
          $('.menu').removeClass('open');
          $('body').removeClass('disable-scroll');
      });

      $(document).scroll(function() {
          var y = $(this).scrollTop();
          if (y > 100) {
            $('.fa-angle-up').addClass('scroll-to-top-active');
          } else {
            $('.fa-angle-up').removeClass('scroll-to-top-active');
          }
        });


    $(function() {
        $('a[href*=#]').on('click', function(e) {
            e.preventDefault();
            var topOffset;
            if (screen.width < 768) {
              topOffset = -35;
            } else {
              topOffset = 15;
            }
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top+topOffset}, 500, 'linear');
        });
    });


    /*------------Sliding elements from bottom--------*/

    (function($) {
      $.fn.visible = function(partial) {

          var $t            = $(this),
              $w            = $(window),
              viewTop       = $w.scrollTop(),
              viewBottom    = viewTop + $w.height(),
              _top          = $t.offset().top,
              _bottom       = _top + $t.height(),
              compareTop    = partial === true ? _bottom : _top,
              compareBottom = partial === true ? _top : _bottom;

            return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

          };

        })(jQuery);

        var win = $(window);

        var allMods = $(".slide-up");

        allMods.each(function(i, el) {
          var el = $(el);
          if (el.visible(true)) {
            el.addClass("already-visible");
          }
        });

        win.scroll(function(event) {

          allMods.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
              el.addClass("come-in");
            }
          });

        });


});
