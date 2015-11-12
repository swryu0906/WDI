var express = require('express');
var app = express();

var answerArray = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];

app.get('/magic/:question', function(req, res) {
  if(req.params.question == 'Will I be a Millionaire') {
    randAnswer = answerArray[Math.floor(Math.random() * answerArray.length)];
    res.send(randAnswer);
  }
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Magic 8 ball app is running......', host, port);
});
