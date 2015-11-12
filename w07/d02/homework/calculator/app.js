var express = require('express');
var app = express();

app.get('/:operation/:num1/:num2', function(req, res) {
  var num1 = Number(req.params.num1);
  var num2 = Number(req.params.num2);
  switch(req.params['operation']) {
    case 'addition':
      var result = num1 + num2;
      break;
    case 'subtraction':
      var result = num1 - num2;
      break;
    case 'multiplication':
      var result = num1 * num2;
      break;
    case 'division':
      var result = num1 / num2;
      break;
    case 'remainder':
      var result = num1 % num2;
      break;
    case 'power':
      var result = power(num1, num2);
      break;
    case 'max':
      var result = max(num1, num2);
      break;
    case 'min':
      var result = min(num1, num2);
  }
  res.send(result.toString());
});

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Calculator app is running......", host, port);
});
