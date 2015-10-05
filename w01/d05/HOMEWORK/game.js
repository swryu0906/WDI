// Game is an object literal.

function Game() {

  // guesses is a number
  this.guesses;
  // guessedLetters is an array of strings
  this.guessedLetters = [];
  // words is an array of strings
  this.words = [];
  // currentWord starts as an empty string
  this.currentWord = '';

  // startGame(wordsArray)
  // should accept an argument, an array of strings
  // should reset the guessedLetters array
  // should reset the words array
  // should set guesses to ten
  // should fill the words array with the words from wordsArray
  // should select a random word from words and create currentWord Word object,
  // should getLetters for the `currentWord
  this.startGame = function(wordsArray) {
    this.guesses = 10;
    this.guessedLetters = [];
    //this.words = [];
    // for (var i = 0; i < wordsArray.length; i++) {
    //   var newWord = new Word();
    //   newWord.getLetters(wordsArray[i]);
    //   words.push(newWord);
    // }
    words = wordsArray.slice();
    // console.log('After wordsArray.slice()');
    // console.log(words);
    currentWord = new Word();
    currentWord.getLetters(words[Math.floor(Math.random() * words.length)]);
    // console.log('currentWord is ');
    // console.log(currentWord.render());
  }

  // guess(letter)
  // Ask the word to try(letter) if letter hasn't been tried already.
  // Push the letter tried into the array of guessedLetters
  this.guess = function(letter) {
    // console.log('letter is \'' + letter + '\'');
    // console.log(this.guessedLetters.indexOf(letter));
    if(this.guessedLetters.indexOf(letter) == -1) {
      currentWord.try(letter);
      this.guessedLetters.push(letter);
      this.guesses--;
    }
  }

  // isOver()
  // Returns true if currentWord has been guessed completely
  // or if guesses is 0
  this.isOver = function() {
    if(currentWord.isFound() || this.guesses === 0)
     return true;
    else return false;
  }

  // overMessage()
  // Returns "You win" if currentWord is found
  // Returns "You lose" if guesses is 0
  // Returns an empty string if game is not over
  this.overMessage = function() {
    if(currentWord.isFound()) return 'You win';
    else if(this.guesses <= 0) return 'You lose';
    else return '';
  }

  // render()
  // Displays rendered word, and number of guesses left,
  // and the guessed letters so far
  this.render = function() {
    console.log(currentWord.render());
    console.log('The number of guesses left : ' + this.guesses);
    console.log('The guessed letters : ' + this.guessedLetters.toString());
  }
}


var wordsArray = ['ACCIDENT', 'BALCONY'];
var gameSample = new Game();
gameSample.startGame(wordsArray);
gameSample.render();
console.log('-------------------------------------------');

gameSample.guess('F');
gameSample.render();
console.log('isOver() : ' + gameSample.isOver());
console.log('overMessage() : ' + gameSample.overMessage());
console.log('-------------------------------------------');

gameSample.guess('R');
gameSample.render();
console.log('isOver() : ' + gameSample.isOver());
console.log('overMessage() : ' + gameSample.overMessage());
console.log('-------------------------------------------');

gameSample.guess('G');
gameSample.render();
console.log('isOver() : ' + gameSample.isOver());
console.log('overMessage() : ' + gameSample.overMessage());
console.log('-------------------------------------------');

gameSample.guess('A');
gameSample.render();
console.log('isOver() : ' + gameSample.isOver());
console.log('overMessage() : ' + gameSample.overMessage());
console.log('-------------------------------------------');

gameSample.guess('B');
gameSample.render();
console.log('isOver() : ' + gameSample.isOver());
console.log('overMessage() : ' + gameSample.overMessage());
console.log('-------------------------------------------');

gameSample.guess('E');
gameSample.render();
console.log('isOver() : ' + gameSample.isOver());
console.log('overMessage() : ' + gameSample.overMessage());
console.log('-------------------------------------------');

gameSample.guess('O');
gameSample.render();
console.log('isOver() : ' + gameSample.isOver());
console.log('overMessage() : ' + gameSample.overMessage());
console.log('-------------------------------------------');

gameSample.guess('N');
gameSample.render();
console.log('isOver() : ' + gameSample.isOver());
console.log('overMessage() : ' + gameSample.overMessage());
console.log('-------------------------------------------');

gameSample.guess('L');
gameSample.render();
console.log('isOver() : ' + gameSample.isOver());
console.log('overMessage() : ' + gameSample.overMessage());
console.log('-------------------------------------------');

gameSample.guess('C');
gameSample.render();
console.log('isOver() : ' + gameSample.isOver());
console.log('overMessage() : ' + gameSample.overMessage());
console.log('-------------------------------------------');


gameSample.guess('Y');
gameSample.render();
console.log('isOver() : ' + gameSample.isOver());
console.log('overMessage() : ' + gameSample.overMessage());
console.log('-------------------------------------------');
