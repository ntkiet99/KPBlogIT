(function ($) {
    $(document).ready(function () {
        $('.header__navitem').click(function (event) {
            $('.header__navitem').removeClass('header__navitemactive');
            $(this).addClass('header__navitemactive');
        });

        // Header lang
        $('.header__lang').click(function(){
            if( $(this).hasClass('f9t-select__active')){
                $(this).removeClass('f9t-select__active');
                $('.f9t-select__menu').fadeOut(200);
            }else{
                $(this).addClass('f9t-select__active');
                $('.f9t-select__menu').fadeIn(200);
            }
        });

        $(document).mouseup(function (e) {
            var container = $(".header__lang");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.header__lang').removeClass('f9t-select__active');
                $('.f9t-select__menu').fadeOut(200);
            }
        });

        // header avatarcontainer
        $('.header__avatarcontainer').click(function(){
            if( $(this).hasClass('header__navitem--show')){
                $(this).removeClass('header__navitem--show');
                $('.header__navitem--account').fadeOut(200);
            }else{
                $(this).addClass('header__navitem--show');
                $('.header__navitem--account').fadeIn(200);
            }
        });

        $(document).mouseup(function (e) {
            var container = $(".header__avatarcontainer");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.header__avatarcontainer').removeClass('header__navitem--show');
                $('.header__navitem--account').fadeOut(200);
            }
        });

        // 
        $('.header__notification--show .tab__item').click(function (event) {
            $('.header__notification--show .tab__item').removeClass('tab__item--active');
            $(this).addClass('tab__item--active');
        });

        $('.article-filter__tab .tab__item').click(function (event) {
            $('.article-filter__tab .tab__item').removeClass('tab__item--active');
            $(this).addClass('tab__item--active');
        });

        // header notifycontainer
        $(document).mouseup(function (e) {
            var container = $(".header__notifycontainer");

            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.header__notifycontainer').removeClass('header__notification--show');
                $('.header__notification--show').fadeOut(200);
            }
        });

        $('.header__notify').click(function(){
            if( $('.header__notifycontainer').hasClass('header__notification--show')){
                $('.header__notifycontainer').removeClass('header__notification--show');
                $('.header__notification--show').fadeOut(200);
            }else{
                $('.header__notifycontainer').addClass('header__notification--show');
                $('.header__notification--show').fadeIn(200);
            }
        });

        setTimeout(function () {
            $(".header__notify--loding").fadeOut(300);
        }, 2000);
        // Carousel
        $("#container2").carousel({
            num: 3,
            maxWidth: 604,
            maxHeight: 268,
            showTime: 3000,
        });




        // fixtop home-list
        window.onscroll = function() {fixedHomeListToTop()};
        
        var header = document.getElementById("home__list__header--box");
        var header_right = document.getElementById("home__list__header-right");
        var sticky = header.offsetTop - 80;
        
        function fixedHomeListToTop() {
          if (window.pageYOffset >= sticky) {
            header.classList.add("home__list__header--box--fixed");
            header_right.classList.add("home__list__header-right--show");
          } else {
            header.classList.remove("home__list__header--box--fixed");
            header_right.classList.remove("home__list__header-right--show");
          }
        }

    });

})(jQuery);