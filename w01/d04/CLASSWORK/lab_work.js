// Version 1.

// var sumSquareDiff = function(max) {
//   var sumSquares = 0;
//   var squareSum = 0;
//   for( var i = 1; i <= max; i++) {
//     sumSquares += i * i;
//     squareSum += i;
//   }
//   squareSum = squareSum * squareSum;
//
//   return squareSum - sumSquares;
// }
//
// var max = 100;
// var answer =  sumSquareDiff(max);
// console.log(answer);



// Version 2.

var sumSquares = function(min, max) {
  var sum = 0;
  for(var i = min; i <= max; i++) {
    sum += Math.pow(i, 2);
  }
  return sum;
}

var squareSum = function(min, max) {
  var sum = 0;
  for(var i = min; i <= max; i++) sum += i;
  sum = Math.pow(sum, 2);
  return sum;
}

var sumSquareDiff = function(min, max) {
  var answer = squareSum(min, max) - sumSquares(min, max);
  console.log('Sum square difference from ' + min + ' to ' + max + ' is ' + answer + '.');
}

sumSquareDiff(1, 100);
