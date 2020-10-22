(function ($) {
    $(document).ready(function () {
        $('.header__navitem').click(function (event) {
            $('.header__navitem').removeClass('header__navitemactive');
            $(this).addClass('header__navitemactive');
        });

        let select_active = 'f9t-select__active';
        window.addEventListener('mouseup', function (event) {
            var pol = $(event.target).hasClass('header__lang');
            var pol2 = $(event.target).hasClass('fa-globe-europe');
            var pol3 = $(event.target).hasClass('f9t-select__label');
            var pol4 = $(event.target).hasClass('f9t-select__icon');

            if (pol || pol2 || pol3 || pol4) {
                if ($('.header__lang').hasClass('f9t-select__active')) {
                    $('.header__lang').removeClass(select_active);
                    $('.f9t-select__menu').hide(200);
                } else {
                    $('.header__lang').addClass('f9t-select__active');
                    $('.f9t-select__menu').show(200);
                }
            } else {
                $('.header__lang').removeClass(select_active);
                $('.f9t-select__menu').hide(200);
            }
        });

        window.addEventListener('mouseup', function (event) {
            var pol = $(event.target).hasClass('header__avatarcontainer');
            var pol2 = $(event.target).hasClass('header__avatarwrp');
            var pol3 = $(event.target).hasClass('header__avatar');
            var pol4 = $(event.target).hasClass('header__avatar--img');

            if (pol || pol2 || pol3 || pol4) {
                if ($('.header__avatarcontainer').hasClass('header__navitem--show')) {
                    $('.header__avatarcontainer').removeClass('header__navitem--show');
                    $('.header__navitem--account').fadeOut(100);
                } else {
                    $('.header__avatarcontainer').addClass('header__navitem--show');
                    $('.header__navitem--account').fadeIn(100);
                }
            } else {
                $('.header__avatarcontainer').removeClass(select_active);
                $('.header__navitem--account').fadeOut(100);
            }
        });
    });
})(jQuery);