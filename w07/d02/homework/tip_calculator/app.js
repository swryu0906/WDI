var express = require('express');
var app = express();

app.get('/tip/:total/:tipPercentage', function(req, res) {
  var tipAmount = Number(req.params['total']) * Number(req.params['tipPercentage']) / 100;
  res.send('Tip amount : ' + tipAmount.toString());
});

app.listen(3000, function() {
  console.log('Listening on port 3000....');
});
