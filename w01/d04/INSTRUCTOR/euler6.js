var sumSquare = function(limit) {
	var sumOfSquares = 0;
	var squareOfSums = 0;
	var sumOfNumbers = 0;
	for(var i = 1; i <= limit; i++) {
		sumOfSquares += Math.pow(i, 2);
		sumOfNumbers += i;
	}
	squareOfSums = Math.pow(sumOfNumbers, 2);
	var difference = squareOfSums - sumOfSquares;
	return difference;
};