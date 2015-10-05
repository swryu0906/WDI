// Word is a function that will return an object

function Word() {

  // letters is an array of Letter objects
  this.letters = [];

  // getLetters(newWord) accepts an input argument, a string.
  // It will split the string into Letter objects
  // and push them into the letters array
  this.getLetters = function(newWord) {
    for (var i = 0; i < newWord.length; i++) {
      this.letters.push(new Letter(newWord.charAt(i)));
    }

  }

  // isFound() returns true if no letters are still hidden
  // returns false if at least one letter is hidden
  this.isFound = function() {
    for (var i = 0; i < this.letters.length; i++) {
      if(this.letters[i].hidden) return false;
    }
    return true;
  }

  // try(letter) accepts an input argument,
  // a string goes through letters and reveals the ones
  // whose value matches the input argument letter
  // returns a boolean indicating if the letter was found
  this.try = function(letter) {
    var isMatched = false;
    for (var i = 0; i < this.letters.length; i++) {
      // Check if whether the input argument letter is same as
      // Letter instance's value property in the letter array
      // regardless letter case
        if (this.letters[i].value.toUpperCase() === letter.toUpperCase()) {
        this.letters[i].show();
        isMatched = true;
      }
    }
    return isMatched;
  }

  // render() returns the word in its "guessed state"
  // ex: for the word 'closure', if the letters l, s, and e have been guessed,
  // this function should return the string _ l _ s _ _ e
  this.render = function() {
    var str = '';
    for (var i = 0; i < this.letters.length; i++) {
      str += this.letters[i].render();
    }
    return str;
  }
}
