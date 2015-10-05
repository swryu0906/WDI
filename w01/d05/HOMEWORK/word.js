// Word is a function that will return an object

function Word() {

  // letters is an array of Letter objects
  this.letters = [];

  // getLetters(newWord) accepts an input argument, a string.
  // It will split the string into Letter objects
  // and push them into the letters array
  this.getLetters = function(newWord) {
    // console.log(newWord);
    for (var i = 0; i < newWord.length; i++) {
      // console.log(newWord.charAt(i));
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
      // console.log(this.letters[i].value + ', ' + letter);
      // console.log(this.letters[i].value.toUpperCase() + ', ' + letter.toUpperCase());
      if (this.letters[i].value.toUpperCase() === letter.toUpperCase()) {
        this.letters[i].show();
        isMatched = true;
      }
      // console.log(isMatched);
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


// var wordSample = new Word();
// wordSample.getLetters('amd');
// console.log('\n');
//
// console.log(wordSample.render());
// console.log(wordSample.isFound());
// console.log('\n');
//
// console.log(wordSample.try('s'));
// console.log(wordSample.render());
// console.log(wordSample.isFound());
// console.log('\n');
//
// console.log(wordSample.try('M'));
// console.log(wordSample.render());
// console.log(wordSample.isFound());
// console.log('\n');
//
// console.log(wordSample.try('f'));
// console.log(wordSample.render());
// console.log(wordSample.isFound());
// console.log('\n');
//
// console.log(wordSample.try('a'));
// console.log(wordSample.render());
// console.log(wordSample.isFound());
// console.log('\n');
//
// console.log(wordSample.try('e'));
// console.log(wordSample.render());
// console.log(wordSample.isFound());
// console.log('\n');
//
// console.log(wordSample.try('D'));
// console.log(wordSample.render());
// console.log(wordSample.isFound());
// console.log('\n');
