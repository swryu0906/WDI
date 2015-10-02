
//  Games with one die

//  Big Six

//  Display the game title
var displayGameTitle = function(title) {
  console.log('\n###############' + title + '###############\n')
}

//  Validate user input
var validateUserInput = function(strInput, min, max) {
  var parsedInput = parseInt(strInput);
  // When user input is not a number
  if(isNaN(parsedInput) || (parsedInput > max) || (parsedInput < min)) {
    console.log('Error! Your input is not a valid number.' +
                '\nPlease, enter the whole number between ' + min + ' and ' + max + '.');
    return false;
  }
  // When user input is valid
  else return parsedInput;
}

var setNumOfPlayers = function(min, max) {
  var read = require('readline-sync');
  var userInput, numOfPlayers;
  var condition = true;
  while(condition){
    userInput = read.question('Please, enter the number of players ( between ' + min + ' and ' + max + ' ) : ');
    numOfPlayers = validateUserInput(userInput, min, max);
    if(numOfPlayers) return numOfPlayers;
  }
}

var getDieNumber = function() {
  return Math.floor(Math.random() * 5) + 1;
}

var bigSix = function() {
  displayGameTitle('Bix Six');

  var resetGameboard = function() {
    var gameboard = {
      '1' : '',
      '2' : '',
      '3' : '',
      '4' : '',
      '5' : '',
      '6' : '',
    };
    return gameboard;
  };

  var gameboard = resetGameboard();



  console.log(setNumOfPlayers(2, 6));
  var numOfPlayers = setNumOfPlayers(2, 6);


  //
  // var gameboard =
  // displayGameTitle('Big Six');
}

bigSix();
