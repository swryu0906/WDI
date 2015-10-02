// Letter is a function that returns a Letter object.

function Letter(value) {

  // value is a string
  this.value = value;
  // hidden is a boolean ( should be set to true by default )
  this.hidden = true;

  // hide() is a function that will set hidden to true
  this.hide = function() {
    this.hidden = true;
  }

  // show() is a function that will set hidden to false
  this.show = function() {
    this.hidden = false;
  }

  // render() is a function that will return _ if the letter is hidden
  // and return the value if the letter is not hidden
  this.render = function() {
    if (this.hidden) return '_';
    else return this.value;
  }
}


// var letterA = new Letter('A');
// console.log(letterA.value);
// console.log(letterA.hidden);
// console.log(letterA.render());
// letterA.show();
// console.log(letterA.render());
// letterA.hide();
// console.log(letterA.render());
