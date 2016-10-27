$(window).on('load', function() {

    var buttons = $('.button');

    // BUTTONS BEHAVIOR
    buttons.click(function() {
        var $this = $(this);
        buttons.removeClass('button_pressed');
        $this.addClass('button_pressed');
        $('.gallery__image').attr('src', $this.data().img);
    });

    buttons.eq(0).click();
    $('.wrapper').width($('.gallery').width());

});