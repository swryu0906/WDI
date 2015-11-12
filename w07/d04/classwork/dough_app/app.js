var request = require('request');
var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/', function(req, res) {
  console.log('hit /');
});


app.get('/doughnuts', function(req, res){
  console.log('hit /doughnuts');
  request('http://api.doughnuts.ga/doughnuts', function(err, res, body){
  }).on('data', function(data){
    res.send(data.toString());
  });
});

app.get('/flavors', function(req, res) {
  console.log('hit /flavors');
  request('http://api.doughnuts.ga/doughnuts', function(err, res, body) {
  }).on('data', function(data) {
    parsedData = parseDoughnuts(data, 'flavor');
    res.send(parsedData);
  });
});


var parseDoughnuts = function(data, attr){
  jsonData = JSON.parse(data);
  newData = [];
  for(var i = 0; i < jsonData.length; i++){
    newData.push(jsonData[i][attr]);
  }
  return newData;
}


app.get('/styles', function(req, res) {
  console.log('hit /styles');
  request('http://api.doughnuts.ga/doughnuts', function(err, res, body){
  }).on('data', function(data){
    parsedData = parseStyles(data, 'style');
    res.send(parsedData);
  });
});

var parseStyles = function(data, attr) {
  debugger
  jsonData = JSON.parse(data);
  newData = [];
  for(var i = 0; i < jsonData.length; i++){
    newData.push(jsonData[i][attr]);
  }
  return newData;
}

app.get('/doughnuts', function(req, res) {
  console.log('hit /doughnuts');
  doughnutClient('http://api.doughnuts.ga/doughnuts', function(body) {
    res.send(parsedDoghnuts(body, 'style'));
  });
});

var doughnutClient = function(url, callback) {
  request(url, function(err, res, body){
    if(!err && res.statusCode == 200){
      callback(body);
    }
  });
};


var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('dough_app is running.', host, port);
});
