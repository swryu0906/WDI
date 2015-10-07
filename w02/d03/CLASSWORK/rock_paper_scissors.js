var message = document.querySelector('#message');
var instruction = document.querySelector('#instruction');
var rpsButtons = document.querySelector('#rpsButtons');
var yes = document.querySelector('#yes');
var no = document.querySelector('#no');
var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');

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

// Compare comInput and userInput and return the result
var whoWins = function(comInput, userInput) {
  if(comInput === userInput)
    return 'TIE';
  else if(comInput === 'ROCK') {
    if(userInput === 'PAPER') return 'USER';
    else return 'COM';
  }
  else if(comInput === 'PAPER'){
    if(userInput === 'SCISSORS') return 'USER';
    else return 'COM';
  }
  // comInput === 'SCISSORS'
  else {
    if(userInput === 'ROCK') return 'USER';
    else return 'COM';
  }
}

var readyGame = function() {
    message.innerHTML = 'Do you want to a game?';
    rpsButtons.classList.add('hidden');
    yesnoButtons.classList.remove('hidden');
}
