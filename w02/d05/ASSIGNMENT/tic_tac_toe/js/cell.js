function Cell() {
  var self = this;

  // value should be either 'X', 'O', and ''
  // default value should be ''
  this.value = '';

  // playble should be set false whenever value is filled by 'X' or 'O'
  // the default value of playable is true
  this.playable = true;

  // set() function should set the current value of that particular cell
  this.set = function(newValue) {
    self.value = newValue;
    self.playable = false;
  };

  // get() function should return value
  this.get = function() {
    return self.value;
  };

  // isPlayable() function should return a boolean indicating
  // whether the cell is playable or not.
  // If the cell already has a value that means the cell was already played
  // and it cannot be playable anymore.
  this.isPlayable = function() {
    return self.playable;
  };
}
