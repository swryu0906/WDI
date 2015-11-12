var express = require('express');
var app = express();

// equivalent to app.use(express.static('public'));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});


var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('giphy app is running.', 'host: ' + host, 'port: ' + port);
});
