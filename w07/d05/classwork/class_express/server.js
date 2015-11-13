var express = require('express');
var app = express();
var request = require('request');
var fs = require('fs');
var parse = require('./libs/parse-json.js');

app.use(express.static('public')); 

app.set('port', (process.env.PORT || 3000));

// root
app.get('/', function(req, res){
  // res.send('Hello world!');
});


// dataset
app.get('/dowjones', function(req, res){
  fs.readFile('./UDJIAD1.json', function(err, data){
    // console.log(data);
    // res.send(data.toString());
    res.send(parse.parseIt(data));

  });
});

// route that request iss info and spits it back out
app.get('/iss', function(req, res){
  request('http://api.open-notify.org/iss-now.json', function(error, response, body){
    res.send(body);
  })
})


var server = app.listen(app.get('port'), function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('class_express app is running.', 'host: ' + host, 'port: ' + port);
});
