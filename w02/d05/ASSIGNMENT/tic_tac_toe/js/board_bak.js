var Board = (function() {
  // cellsList array should store list of cells
  var cellList = [];

  // player object should store names of the players.
  var players = {
    X: '',
    O: ''
  };

  // currentPlayer should store either 'X' or 'O'
  var currentPlayer = 'X';

  // when checkWin() function returns true,
  // winner is set from currentPlayer
  var winner = '';

  // Arrays of position indexes which are in a row.
  var horizontalRowArray = [];
  var verticalRowArray = [];
  var diagonalRowArray = [[], []];
  // var winCases = [7, 56, 448, 73, 146, 292, 84, 273];


  return {
    startGame : function() {
      // currentPlayer is set as 'X' from start
      currentPlayer = 'X';

      // make all cells empty by removing 'X-marker' and 'O-marker' classes
      var cellTdArray = document.querySelectorAll('.cell');
      for(var i = 0; i < cellTdArray.length; i++){
        cellList.push(new Cell());
        cellTdArray[i].classList.remove('X-marker', 'O-marker');
      }

      // Create position index lists to check win
      var rowLength = Math.pow(cellTdArray.length, 0.5);
      for(var i = 0; i < rowLength; i++) {
        // diagonalRowArray should contain diagonal position list
        diagonalRowArray[0].push(4 * i);
        diagonalRowArray[1].push(2 * i + 2);

        horizontalRowArray.push([]);
        verticalRowArray.push([]);

        for(var j = 0; j < rowLength; j++){
            // horizontalRowArray should contain horizontal position list
            horizontalRowArray[i].push(3 * i + j);
            // verticalRowArray should contain vertical positon list
            verticalRowArray[i].push(i + 3 * j);
        }
      }

      // console.log(horizontalRowArray);
      // console.log(verticalRowArray);
      // console.log(diagonalRowArray);
    },

    // makePlay(position) function should accept a position argument
    // and set the value of that cell
    // should do nothing if the cell has already been played on
    // should do nothing if there is no cell at that position
    makePlay : function(position) {
      var currentCell = cellList[position];
      if(currentCell.isPlayable()) {
        currentCell.set(currentPlayer);
        if(currentPlayer === 'X')
          document.getElementById([position]).classList.add('X-marker');
        else
          document.getElementById([position]).classList.add('O-marker');

        // if(!checkWin()) {
        //   if(currentPlayer === 'X') currentPlayer = 'O';
        //   else currentPlayer = 'X';
        // }
      }
    },

    // checkWin() function should return a boolean value
    // It should check the game board to see if the previous play was a winning play
    // once you get this working try to refactor it to be more dry
    checkWin : function() {
        var isWon = true;

        var isSame = function (indexArray) {
          console.log(indexArray);
          if(cellList[indexArray[0]].get() === '') return false;
          for(var i = 1; i < indexArray.length; i++)
            if(cellList[indexArray[0]].get() !== cellList[indexArray[i]].get()) return false;
          return true;
        }

        for(var i = 0; i < horizontalRowArray.length; i++) {
          console.log('horizontalRowArray[' + i + '] = ' + isSame(horizontalRowArray[i]));
          if(isSame(horizontalRowArray[i])) return true;
          console.log('verticalRowArray[' + i + '] = ' + isSame(verticalRowArray[i]));
          if(isSame(verticalRowArray[i])) return true;
        }
        for(var i = 0; i < diagonalRowArray.length; i++) {
          console.log('diagonalRowArray[' + i + '] = ' + isSame(diagonalRowArray[i]));
          if(isSame(diagonalRowArray[i])) return true;
        }

        return false;
    },

    changePlayer : function() {
      if(currentPlayer === 'X') currentPlayer = 'O';
        else currentPlayer = 'X';
    },

    getCurrentPlayer : function() {
      return currentPlayer;
    }
  };

})();


document.getElementById('0').classList.add('X-marker');
//var intervalHandler = window.setTimeout(Board.startGame, 3000);
Board.startGame();
console.log('currentPlayer = ' + Board.currentPlayer);
Board.makePlay(2);
console.log(Board.checkWin());
if(!Board.checkWin()) Board.changePlayer();
console.log('currentPlayer = ' + Board.currentPlayer);
Board.makePlay(3);
console.log(Board.checkWin());
if(!Board.checkWin()) Board.changePlayer();
console.log('currentPlayer = ' + Board.currentPlayer);
Board.makePlay(1);
console.log(Board.checkWin());
if(!Board.checkWin()) Board.changePlayer();
console.log('currentPlayer = ' + Board.currentPlayer);
Board.makePlay(4);
console.log(Board.checkWin());
if(!Board.checkWin()) Board.changePlayer();
console.log('currentPlayer = ' + Board.currentPlayer);
Board.makePlay(7);
console.log(Board.checkWin());
if(!Board.checkWin()) Board.changePlayer();
console.log('currentPlayer = ' + Board.currentPlayer);
Board.makePlay(5);
console.log(Board.checkWin());
if(!Board.checkWin()) Board.changePlayer();
console.log('currentPlayer = ' + Board.currentPlayer);
Board.makePlay(6);
console.log(Board.checkWin());
if(!Board.checkWin()) Board.changePlayer();
console.log('currentPlayer = ' + Board.currentPlayer);
