var socket = io();
var myUser;

$(function() {

	$('#login-input').keypress(function(event) {
		if(event.keyCode === 13) {
			var username = $('#login-input').val();
			myUser = username;
			socket.emit('add user', username);
			$('#login-input').val('');
			$('#loginpage').hide();
		}
	});

	$('#message').keypress(function(event) {
		if(event.keyCode === 13) {
			var message = $('#message').val();
			socket.emit('send message', {name: myUser, message: message});
			$('#message').val('');
		}
	});

});

// SOCKET EVENTS

socket.on('user joined', function(users) {
	var usersList = $('#users ul');
	usersList.empty();
	users.forEach(function(user) {
		var userElement = $('<li>');
		userElement.text(user.name);
		usersList.append(userElement);
	});
});

socket.on('send message', function(data) {
	var chatList = $('#messages');
	var message = $('<li>');
	message.text(data.name + " : " + data.message);
	chatList.append(message);
});
























