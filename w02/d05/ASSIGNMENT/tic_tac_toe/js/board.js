function Board() {
  var self = this;

  // cellsList should contain 9 cells on tic tac toe board
  this.cellList = [];

  // players should contain two player names
  this.players = {
    X : '',
    O : ''
  };

  // currentPlayer should contain either 'X' or 'O'
  this.currentPlayer = '';

  // When checkWin() function returns true,
  // winner should be set from currentPlayer
  this.winner = '';

  // Arrays of position indexes in a row
  this.horizontalRowArray = [];
  this.verticalRowArray = [];
  this.diagonalRowArray = [[], []];

  // startGame() function should set up the board and add cells to the board
  // It should set the current player
  this.startGame = function() {

    // currentPlayer is set as 'X' from start
    self.currentPlayer = 'X';
    document.getElementById('X').classList.add('current-player');
    document.getElementById('O').classList.remove('current-player');

    // make all cells empty by removing 'X-marker' and 'O-marker' classes
    var cellTdArray = document.querySelectorAll('.cell');
    for(var i = 0; i < cellTdArray.length; i++) {
      self.cellList.push(new Cell());
      cellTdArray[i].classList.remove('X-marker', 'O-marker');
    }

    // Create position index lists to check win
    var rowLength = Math.pow(cellTdArray.length, 0.5);
    for(var i = 0; i < rowLength; i++) {
      // diagonalRowArray should contain diagonal position list
      self.diagonalRowArray[0].push(4 * i);
      self.diagonalRowArray[1].push(2 * i + 2);

      self.horizontalRowArray.push([]);
      self.verticalRowArray.push([]);

      for(var j = 0; j < rowLength; j++){
          // horizontalRowArray should contain horizontal position list
          self.horizontalRowArray[i].push(3 * i + j);
          // verticalRowArray should contain vertical positon list
          self.verticalRowArray[i].push(i + 3 * j);
      }
    }
  };

  // makePlay(position) function should accept a position argument
  // and set the value of that cell
  // should do nothing if the cell has already been played on
  // should do nothing if there is no cell at that position
  this.makePlay = function(position) {
    var currentCell = self.cellList[position];
    if(currentCell.isPlayable()) {
      currentCell.set(self.currentPlayer);
      if(self.currentPlayer === 'X')
        document.getElementById(position.toString()).classList.add('X-marker');
      else
        document.getElementById(position.toString()).classList.add('O-marker');

      if(!self.checkWin()) {
        if(self.currentPlayer === 'X') {
          self.currentPlayer = 'O';
        }
        else {
          self.currentPlayer = 'X';
        }
        document.getElementById('O').classList.toggle('current-player');
        document.getElementById('X').classList.toggle('current-player');
        document.getElementById('message').textContent =
          self.players[self.currentPlayer] + ', it\'s your turn!';
//
      }
    }
  };

  // checkWin() function should return a boolean value
  // It should check the game board to see if the previous play was a winning play
  // once you get this working try to refactor it to be more dry
  this.checkWin = function() {

      var isSame = function (indexArray) {
        // console.log(indexArray);
        if(!self.cellList[indexArray[0]].value) return false;
        for(var i = 1; i < indexArray.length; i++)
          if(self.cellList[indexArray[0]].get() !== self.cellList[indexArray[i]].get()) return false;
        self.winner = self.currentPlayer;
        return true;
      }

      for(var i = 0; i < self.horizontalRowArray.length; i++) {
        if(isSame(self.horizontalRowArray[i])) return true;
        if(isSame(self.verticalRowArray[i])) return true;
      }
      for(var i = 0; i < self.diagonalRowArray.length; i++) {
        if(isSame(self.diagonalRowArray[i])) return true;
      }

      return false;
  };
}
