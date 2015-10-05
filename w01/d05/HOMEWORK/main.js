//  Display the game title

var displayGameTitle = function(title, hashSize) {
  var result = '';
  var hash = function(size) {
    for (var i = 0; i < size; i ++) {
      result += '#';
    }
  };

  hash((hashSize * 2) + title.length + 2);
  result += '\n';
  hash(hashSize)
  result += ' ' + title.toUpperCase() + ' ';
  hash(hashSize);
  result += '\n';
  hash((hashSize * 2) + title.length + 2);
  console.log(result);
}

var wordsArray = [
  'acres',
  'adult',
  'advice',
  'arrangement',
  'attempt',
  'August',
  'Autumn',
  'border',
  'breeze',
  'brick',
  'calm',
  'canal',
  'Casey',
  'cast',
  'chose',
  'claws',
  'coach',
  'constantly',
  'contrast',
  'cookies',
  'customs',
  'damage',
  'Danny',
  'deeply',
  'depth',
  'discussion',
  'doll',
  'donkey',
  'Egypt',
  'Ellen',
  'essential',
  'exchange'
];

var newGame = new Game();
newGame.startGame(wordsArray);
displayGameTitle('Hangman', 20);

var userInput ='';
var cond = true;

while(cond) {
  newGame.render();
  userInput = prompt('What is your guessed letter? : ');
  userInput = userInput.toUpperCase();
  newGame.guess(userInput);


  if(newGame.isOver()) {
    console.log('\n' + newGame.overMessage() + '\n');

    var isInputWrong = true;
    while(isInputWrong) {
      userInput = prompt('Do you want to play another game? (Y/N) : ');
      userInput = userInput.toUpperCase();

      if(userInput === 'Y') {
        displayGameTitle('Hangman', 20);
        newGame.startGame(wordsArray);
        isInputWrong = false;
      }
      else if(userInput === 'N'){
        console.log('Bye!');
        cond = false;
        isInputWrong = false;
      }
      else {
        console.log('Wrong input!');
      }
    }
  }
}
