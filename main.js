$(window).on('load', function() {

	var gallery__image = $('.gallery__image'),
        buttons = $('.button'),
        pics_paths = {
            'По полу': 'pics/2.png',
            'По возрасту': 'pics/3.png'
        };

	$('.content').width(gallery__image.width());

	// BUTTONS BEHAVIOR
	buttons.click(function() {
	    buttons.removeClass('button_pressed');
	    $(this).addClass('button_pressed');
        gallery__image.attr('src', pics_paths[this.textContent]);
	});
});