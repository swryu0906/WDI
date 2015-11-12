var express = require('express');
var app = express();


// if n is a fibonacci number,
// getFiboIndex() will return its index,
// if n is not a fibonacci number,
// getFiboIndex() will return false
var getFiboIndex = function(n) {
  // check whether index is not negative
  if(n <= 0) return false;

  // Assume that fibonacci number starts from 1 and
  // the Fibonacci number are 1, 2, 3, 5, 8, 13.....
  // 1 has fibonacci index 1,
  // 2 has finonacci index 2, and so on.
  else if(n == 1) return 1;
  else if(n == 2) return 2;
  else {
    var a = 1, b = 2, fibo = 2;
    var index = 2;
    while(fibo < n) {
      fibo = a + b;
      a = b;
      b = fibo;
      index++;
    }
    if(n == fibo) return index;
    else return false;
  }
};

// getFiboSum() function return the sum of all fibonacci numbers up to the given index
var getFiboSum = function(index) {
  // check whether index is not negative
  if(index <= 0) return false;

  else if(index == 1) return 1;
  else if(index == 2) return 3;
  else {
    var a = 1, b = 2, fibo = 2;
    for(var i = 2; i < index; i++) {
      fibo = a + b;
      a = b;
      b = fibo;
    }
    return getFiboSum(index - 1) + fibo;
  }
}


app.get('/fibonacci/:num', function(req, res){
  var num = Number(req.params.num);
  var index = getFiboIndex(num);

  // When the given number is a Fibonacci number
  if(index) {
    var sum = getFiboSum(index);
    res.send('Sweet number, dude. <br>' +
      num.toString() + ' has fibonacci number index ' + index.toString() + '. <br>' +
      'The sum of all fibonacci numbers up to and including ' + '\'' + num.toString() + '\' is ' + sum.toString() + '.');
  }
  // When the given number is not a Fibonacci number
  else res.send('Brah, I can tell this ain\'t a fibonacci number. Wack.');
});


var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('Fibonacci App is running', host, port);
});
