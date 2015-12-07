//local scope
function myFunction() {
	var a = 4;
	return a*a;
}

//global scope
var a =4;
function myFunction() {
	return a*a;
};

// 

function add() {
	var number = 0;
	console.log(number++);
};

// closure

function makeTimer() {
	var number = 0;
	return function() {
		number++;
		console.log(number);
	}
}


// write a function that returns 7
function add(num1) {
	return function(num2) {
		return num1 + num2;
	}
}
console.log(add(5)(2));

var addFiveTo = add(5);
console.log(addFiveTo(7));



























