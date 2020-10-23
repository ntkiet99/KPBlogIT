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
        $('.tab__item').click(function (event) {
            $('.tab__item').removeClass('tab__item--active');
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
    });

})(jQuery);