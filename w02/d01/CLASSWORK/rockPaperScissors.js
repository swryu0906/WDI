var title = document.createElement('h1');
var message = document.createElement('h3');
var resultMessage = document.createElement('h3');
var div = document.createElement('div');
var rockBtn = document.createElement('button');
var paperBtn = document.createElement('button');
var scissorsBtn = document.createElement('button');
var yesBtn = document.createElement('button');
var noBtn = document.createElement('button');


var imgTitle = document.createElement('img');
// var imgWin = document.createElement('img');
// var imgLose = document.createElement('img');
imgTitle.src = 'title.gif';

title.id = 'title';
title.innerHTML = 'Rock Paper Scissors Game';
message.id = 'message';
message.innerHTML = '';
resultMessage.id = 'result_message';
resultMessage.innerHTML = '';
rockBtn.id = 'rock';
rockBtn.innerHTML = 'rock';
paperBtn.id = 'paper';
paperBtn.innerHTML = 'paper';
scissorsBtn.id = 'scissors';
scissorsBtn.innerHTML = 'scissors';
yesBtn.id = 'yes';
yesBtn.innerHTML = 'yes';
noBtn.id = 'no';
noBtn.innerHTML = 'no';

var wins = 0;
var loses = 0;

document.body.appendChild(title);

// Generate a computer input
var getComInput = function() {
  var randomNum = Math.floor(Math.random() * 3);
  switch(randomNum) {
    case 0:
      return 'ROCK';
    case 1:
      return 'PAPER';
    case 2:
      return 'SCISSORS';
  }
}

// Compare the comInput and userInput and return the result
var whoWins = function(comInput, userInput) {
  if(comInput === userInput)
    return 'Both are tie.';
  else if(comInput === 'ROCK') {
    if(userInput === 'PAPER') return 'User wins.';
    else return 'Computer wins.';
  }
  else if(comInput === 'PAPER'){
    if(userInput === 'SCISSORS') return 'User wins.';
    else return 'Computer wins.';
  }
  // comInput === 'SCISSORS'
  else {
    if(userInput === 'ROCK') return 'User wins.';
    else return 'Computer wins.';
  }
}


var readyGame = function() {
    message.innerHTML = 'Do you want to play \"Rock, Paper, Scissors\" game?';
    document.body.appendChild(message);
    document.body.appendChild(imgTitle);
    document.body.appendChild(yesBtn);
    document.body.appendChild(noBtn);
    yesBtn.addEventListener('click', function(eventObject) {
      playGame();
    });
}



var playGame = function() {
  wins = 0;
  loses = 0;
  document.body.removeChild(yesBtn);
  document.body.removeChild(noBtn);
  message.innerHTML = 'Let\'s play! Choose one of the following buttons :';
  document.body.appendChild(message);
  document.body.appendChild(rockBtn);
  document.body.appendChild(paperBtn);
  document.body.appendChild(scissorsBtn);

  rockBtn.addEventListener('click', function(eventObject) {
    displayResult('ROCK');
  });
  paperBtn.addEventListener('click', function(eventObject) {
    displayResult('PAPER');
  })
  scissorsBtn.addEventListener('click', function(eventObject) {
    displayResult('SCISSORS');
  })
}

var displayResult = function(userInput) {
  document.body.removeChild(rockBtn);
  document.body.removeChild(paperBtn);
  document.body.removeChild(scissorsBtn);

  var comInput = getComInput();
  message.innerHTML = 'Your input is ' + userInput +
                      ' and  computer input is ' + comInput + '.';

  document.body.appendChild(message);
  var result = whoWins(comInput, userInput);
  if(result === 'Computer Wins') {

  }
  document.body.appendChild(yesBtn);
  document.body.appendChild(noBtn);
  yesBtn.addEventListener('click', function(eventObject) {
    playGame();
  });
  noBtn.addEventListener('click', function(eventObject) {
    readyGame();
  })
}
readyGame();
