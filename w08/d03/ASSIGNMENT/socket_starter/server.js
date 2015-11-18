var express = require('express');
var app     = express();
var server  = require('http').createServer(app);
var io      = require('socket.io')(server);

app.set('port', 3000);
app.use(express.static('public'));

var users = [];
var addedUser = false;

io.on('connection', function(client){
	console.log('User has connected.');
	// console.log(client);
	client.on('add user', function(username){
		var userObj = {};
		userObj.name = username;
		userObj.id = client.id;
		users.push(userObj);
		addedUser = true;
		io.emit('user joined', users);
	});

  client.on('send message', function(data){
    io.emit('send message', data);
  });

	client.on('disconnect', function(){
		console.log('User has disconnected.');
		// client.boradcast.emit('event', whatever); // for everyone except event trigger
		if(addedUser){
			users.forEach(function(user){
				if(user.id === client.id)
					users.splice(users.indexOf(user), 1);
			});
		}
		io.emit('user joined', users);
	});
});



server.listen(app.get('port'), function() {
	console.log("Node app is running at localhost:" + app.get('port'));
});
