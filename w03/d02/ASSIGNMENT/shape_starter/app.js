$(function() {
	console.log('Loaded, bro');
});

$('.shpe-box').on('click', '#makeCicles', makeCicles);
$('.shpe-box').on('click', '#makeSquareds', makeSquares);
$('.shpe-box').on('click', '#makeCicles', makeCicles);



var makeCircles = function(num, color) {
	var container = $(')

	var num = +$(this).closest('.shape-box').find('input[type=number]').val();
	var color = $(this).closest('.shape-box').find('input[type=text]').val();
	for(var i = 0; i < num; i++) {
		var circleDiv = $('<div></div>');
		circleDiv.addClass('circle');
		circleDiv.css({'background-color': color});
		$()
	}

};

var makeSquares = function() {

};

var makeThings = function() {

};

var clearShapes = function(which) {

};

var randomColor = function() {

};

$('.shape-box').on('click', '.draw-btn', function() {
	// console.log('btn is clicked');
	var num = +$(this).closest('.shape-box').find('input[type=number]').val();
	var color = $(this).closest('.shape-box').find('input[type=text]').val();
	// console.log(num + ', ' + shape);
});

// var ShapeStarter = (function() {
// 	return {
// 		init: function() {
// 				$()
// 		},
// 		getUserInput: function {
//
// 		}
// 	};
// })();
