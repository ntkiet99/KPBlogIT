(function ($) {
    $(document).ready(function () {
        $('.header__navitem').click(function (event) {
            $('.header__navitem').removeClass('header__navitemactive');
            $(this).addClass('header__navitemactive');
        });

        // Header lang
        $('.header__lang').click(function () {
            if ($(this).hasClass('f9t-select__active')) {
                $(this).removeClass('f9t-select__active');
                $('.f9t-select__menu').fadeOut(200);
            } else {
                $(this).addClass('f9t-select__active');
                $('.f9t-select__menu').fadeIn(200);
            }
        });

        $('.article-card__like').click(function () {
            if ($(this).hasClass('article-card__like-active')) {
                $(this).removeClass('article-card__like-active');
            } else {
                $(this).addClass('article-card__like-active');
            }
        });

        $('.account-site-menu-item').click(function(){
            if($('.account-site-menu__list .account-site-menu-item').hasClass('nuxt-link-active')){
                $('.account-site-menu__list .account-site-menu-item').removeClass('nuxt-link-active');
                $(this).addClass('nuxt-link-active');
            }else{
                $(this).addClass('nuxt-link-active');
            }
        })

        $(document).mouseup(function (e) {
            var container = $(".header__lang");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.header__lang').removeClass('f9t-select__active');
                $('.f9t-select__menu').fadeOut(200);
            }
        });

        // header avatarcontainer
        $('.header__avatarcontainer').click(function () {
            if ($(this).hasClass('header__navitem--show')) {
                $(this).removeClass('header__navitem--show');
                $('.header__navitem--account').fadeOut(200);
            } else {
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

        $('.header__notify').click(function () {
            if ($('.header__notifycontainer').hasClass('header__notification--show')) {
                $('.header__notifycontainer').removeClass('header__notification--show');
                $('.header__notification--show').fadeOut(200);
            } else {
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

        // author fixed
        // window.onscroll = function () { fixedAuthorToTop() };
        function fixedAuthorToTop(){
            var author_fixed = document.getElementById("article-page-author--fixed");
            // debugger;
            if(author_fixed != null){
                var fixed =author_fixed.offsetTop - 40;
                if(window.pageYOffset >= fixed){
                    if (author_fixed != null)
                        author_fixed.classList.add("article-page-author--fixed");
                }else{
                    if (author_fixed != null)
                        author_fixed.classList.remove("article-page-author--fixed");
                }
            }
            return;     
        }
        // fixtop home-list
        window.onscroll = function () { fixedHomeListToTop(),fixedAuthorToTop()  };


        var header = document.getElementById("home__list__header--box");
        var header_right = document.getElementById("home__list__header-right");
        var rocket = document.getElementById("rocket");
       
        if (header != null)
            var sticky = header.offsetTop - 80;

        function fixedHomeListToTop() {
            if (window.pageYOffset >= sticky) {
                if (header != null)
                    header.classList.add("home__list__header--box--fixed");
                if (header_right != null)
                    header_right.classList.add("home__list__header-right--show");
                if (rocket != null)
                    rocket.classList.add("rocket--visible");
               
            } else {
                if (header != null)
                    header.classList.remove("home__list__header--box--fixed");
                if (header_right != null)
                    header_right.classList.remove("home__list__header-right--show");
                if (rocket != null)
                    rocket.classList.remove("rocket--visible");
                    
            }
        }
        $(".rocket").click(function () {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });

        $('#rocket').hover(function () {
            $(this).children().removeClass('rocket__rocket');
            $(this).children().addClass('rocket__rocket_1');
        }, function () {
            $(this).children().removeClass('rocket__rocket_1');
            $(this).children().addClass('rocket__rocket');
        });

        $('.topic-label-selector__add').click(function () {
            $('.article-topic-sheet').modal('show');
        });


        $('#title-text').on({
            focus: function () {
                $('.input__container').first().css('border-color', '#dcbc60');


            },
            blur: function () {
                $('.input__container').first().css('border-color', '#ebebeb');
            }
        });

        
        $('.input__container textarea').on({
            focus: function () {
                $(this).parent().css('border-color', '#dcbc60');


            },
            blur: function () {
                $(this).parent().css('border-color', '#ebebeb');
            }
        });
        $("#account-user-feel").attr("maxlength", 100);
        $('#account-user-feel').on('input', function (e) {
            var count = $(this).val().length;
            $('.account-input__maxtip').text(count + '/100');
        });
        $("#title-text").attr("maxlength", 100);
        $('#title-text').on('input', function (e) {
            var count = $(this).val().length;
            $('.count-tip').text(count + '/100');
        });
        $('.input__maxtip').attr('maxlength', 500);

        $('.input__container textarea').on('input', function (e) {
            var count = $(this).val().length;
            $('.input__maxtip').text(count + '/500');
        });
        $('.new-article-topic__disable-text').parents('.new-article-topic__card').hover(function () {
            $(this).css({ 'border': '1px solid #ebebeb', 'cursor': 'default' });
        });

        $('.new-article-topic__card').click(function () {
            if ($(this).find('.new-article-topic__disable-text').length === 0) {
                $('.article-topic-sheet').modal('hide');
                $('.topic-selector-container').prepend(' <div class="topic-label-selector"><div class="topic-label-selector__item topic-label-selector__editable"><a href="javascript:void(0)" class="topic-label-selector__link" target="_blank"><span>Games games nè</span></a><i  class="topic-label-selector__remove fas fa-times"></i></div></div>');
                if ($(".topic-label-selector").length > 3) {
                    $('.topic-label-selector__add').parent().css('display', 'none');
                }
            }
        });

        $(document).on('click', '.topic-label-selector__remove', function () {
            $(this).parents()[1].remove();
            if ($(".topic-label-selector").length <= 3) {
                $('.topic-label-selector__add').parent().css('display', 'block');
            }
        });
        $(".form-item-container__addtext").on("click", function () {
            $("#uploadfile").focus().trigger("click");
        });

        
        $('#uploadfile').change(function() {
            var vals = $(this).val(),
            val = vals.length ? vals.split('\\').pop() : '';
            $('.form-item-container__imgs').prepend('<div class="form-item-container__img"  style="background-image: url(\'\/assets\/img\/banner\/2.png\');"><div class="form-item-container__deleteimg"><img src="assets/img/multiply_50px.png" alt="'+val+' "></div></div>');
            if ($(".form-item-container__img").length > 6) {
                $('.form-item-container__add').css('display', 'none');
            }
        });

        $(document).on('click', '.form-item-container__deleteimg', function () {
            $(this).parents()[0].remove();
            if ($(".form-item-container__img").length <= 6) {
                $('.form-item-container__add').css('display', 'block');
            }
        });

        $(document).on('click','.header__logo', function(){
            var url = '/';
            $(location).attr('href', url);
        });

        $(document).on('click','#button_newpost', function(){
            var url = '/newArticle.html';
            $(location).attr('href', url);
        });

        $(document).on('click','#button_newquestion', function(){
            var url = '/newArticleImage.html';
            $(location).attr('href', url);
        });

        // $(document).on('click','.article-card', function(){
        //     var url = '/detailPost.html';
        //     $(location).attr('href', url);
        // });

        // swipper
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        var galleryTop = new Swiper('.gallery-top', {
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: galleryThumbs
            }
        });

        // tinymce
        tinymce.init({
            selector: 'textarea',
            width: "100%",
            height: "200px",
            entity_encoding: "raw",
            menubar: false,

            relative_urls: false,
            inline_styles: true, image_advtab: true,
            branding: false,

            plugins: [
                'image',
                'wordcount'
            ],
            toolbar: 'image'

        });
    });

})(jQuery);