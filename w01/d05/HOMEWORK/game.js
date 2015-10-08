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

    words = wordsArray.slice();
    currentWord = new Word();
    currentWord.getLetters(words[Math.floor(Math.random() * words.length)]);
  }

  // guess(letter)
  // Ask the word to try(letter) if letter hasn't been tried already.
  // Push the letter tried into the array of guessedLetters
  this.guess = function(letter) {
    if(this.guessedLetters.indexOf(letter) == -1) {
      currentWord.try(letter);
      this.guessedLetters.push(letter.toUpperCase());
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
