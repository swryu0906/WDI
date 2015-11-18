var express = require('express');
var app     = express();
var server  = require('http').createServer(app);
var io      = require('socket.io')(server);

app.set('port', 3000);
app.use(express.static('public'));

server.listen(app.get('port'), function() {
	console.log("Node app is running at localhost:" + app.get('port'));
});