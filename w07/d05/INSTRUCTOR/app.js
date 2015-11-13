var express = require('express');
var app = express();
var request = require('request');
var fs = require('fs');
var parse = require('./libs/parse-json.js');



app.set('port', (process.env.PORT || 3000));

app.use(express.static('public'));

// root
app.get('/', function(req, res){
  res.send('hello worl');
});

// route that pareses dowjones dataset
app.get('/dowjones', function(req, res){
  fs.readFile ('dowjones.json', function(err, data){
    res.send(parse.parseIt(data));
  });
});

// route that requests iss info and spits it back out
app.get('/iss', function (req, res){
  request('http://api.open-notify.org/iss-now.json', function (error, response, body){
    res.send(body);
  });
});

var server = app.listen(app.get('port'), function(){
  var host = server.address().address;
  var port = server.address().port
  console.log('Express node running on port ', port);

});
