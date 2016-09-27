$(document).ready(function() {

	var gallery = $('.gallery__image');
	$('.content').width(gallery.width());

	// BUTTONS BEHAVIOR
	var pics_paths = {
	    'По полу': 'pics/2.png',
	    'По возрасту': 'pics/3.png'
	};

	var buttons = $('.button').click(function() {
	    buttons.removeClass('button_pressed');
	    buttons.addClass('button_clickable');
	    $(this).addClass('button_pressed');
	    $(this).removeClass('button_clickable');
        gallery.attr('src', pics_paths[this.textContent]);
	});
});