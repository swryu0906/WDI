function Game() {
  var self = this;

  // A board object
  this.board;

  // makeBoard() function should create a new board object for the game
  this.makeBoard = function() {
    board = new Board();
  };

  // start() function should start the game
  // and display the current state of the board
  this.start = function() {

    board.startGame();
    board.players.X = prompt('Please enter player X\'s name :');
    board.players.O = prompt('Please enter player O\'s name :');

    document.getElementById('X').textContent = 'Player X : ' + board.players.X;
    document.getElementById('O').textContent = 'Player O : ' + board.players.O;
    document.getElementById('message').textContent = board.players[board.currentPlayer] + ', it\'s your turn!';
  };

  // play(position) function should accept a single input value,
  // a position on the game board and make a play.
  // If the position is 0, its gonna look in the board array of cells
  // and get the cell with the index of 0.
  // after a play it should set the value for the cell according to the current player.
  // EX. if player is X set that cell to X.
  // Iy should check for a winner after each play
  // and alert the winner if one is found
  // Also, PRO-TIP: WORK WITH A PARTNER. Two heads are always better than one.
  this.play = function(event) {
    if(!board.checkWin()) {
      var position = Number(event.target.getAttribute('id'));
      board.makePlay(position);
      // If checkWind() returns ture, "currentPlayer won" message should be displayed
      if(board.checkWin()) {
        document.getElementById('message').textContent = self.board.players[self.board.winner] + ' wins!';
      }
    }
  }
}

var game = new Game();
game.makeBoard();
document.getElementById('start-btn').addEventListener('click', game.start);
var cellTdArray = document.getElementsByClassName('cell');
for(var i = 0; i < cellTdArray.length; i++) {
  document.getElementById(i.toString()).addEventListener('click', game.play);
}
