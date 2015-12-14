$(function() {
	console.log('$$$ in the bank.');
	
	var button = $('#set-color');
	var inputField = $('#color-field');
	var brush = $('.brush');
	var color = 'black';

	var setColor = function() {
		color = inputField.val();
		brush.css('background', color);
	};
	
	button.on('click', function() {
  	setColor();
  });

  inputField.on('keypress', function(e) {
  	if(e.keyCode === 13) {
  		setColor();
  	}
  });

  for(var i = 0; i < 8000; i++) {
  	var box = $('<div>');
  	box.addClass('square');
  	box.on('mouseover', function() {
  		$(this).css("background", color);
  	});
  	$('body').append(box);
  }






































});