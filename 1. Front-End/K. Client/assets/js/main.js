(function($) {
    $(document).ready(function(){
        $('.header__navitem').click(function(event){
            $('.header__navitem').removeClass('header__navitemactive');
            $(this).addClass('header__navitemactive');
        });
    })
})(jQuery);