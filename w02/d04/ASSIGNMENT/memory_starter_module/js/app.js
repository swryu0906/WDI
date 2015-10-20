// var Tile = (function() {
// 	var value = '';
// 	var divTile = document.createElement('div');
// 	divTile.setAttribute('class', 'column');
// 	return {
// 		setDataValue: function()
// 	}
// })();


var Game = (function() {

	var	tilesArray = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'];
	var	containerDiv = document.getElementById('game');
	var infoDiv = document.getElementById('info');

	return {

		// shuffle the tiles array
		// then call makeAndDisplayTiles to build and display the gameboard
		start : function() {
			tilesArray = shuffle(tilesArray);
		},

		// makeAndDisplayTiles() function should empty the container that will hold the gameboard tiles
		// it should clear the text in the info div
		// it should create 10 new game tiles (divs)
		// give them the class 'column'
		// give them a 'data-value' attribute from each element of your tiles array.
		// The output for an 'A' tile will look like <div class="column" data-value="A"></div>
		// add the game tiles to the board
		//  then call a function that will add click events to each tile
		makeAndDisplayTiles : function() {
			containerDiv.innerHTML = '';
			infoDiv.innerHTML = '';
			var curTile;
			for(var i = 0; i < tilesArray.length; i++) {
				curTile = document.createElement('div');
				curTile.setAttribute('class', 'column');
				curTile.setAttribute('data-value', tilesArray[i]);
				containerDiv.appendChild(curTile);
			}
		},

		// addEventsToTiles() should add click events to each of the gameboard tiles
		// Each click event should call the game object's makePlay function passing it the tile that was clicked.
		// Strong hint: the tile that was clicked is this tile . . .
		addEventsToTiles : function() {
			var tileDivArray = document.getElementsByClassName('column');
			var self = this;
			console.log(tileDivArray);
			for(var i = 0; i < tileDivArray.length; i++) {
					tileDivArray[i].addEventListener('click', function() { self.makePlay(event) });
			}
		},

		// makePlay(tile) function should set the text of the current clicked tile
		// to the value stored in the data attribute
		// it should add a class of found to the tile
		// it should add a class of clicked to the tile
		// if the number of clicked tiles is 2, then it should check for a match
		makePlay : function(event) {
			console.log(event);
			console.log(event.target);
			var tile = event.target;
			var dataValue = tile.getAttribute('data-value');
			tile.textContent = dataValue;
			tile.classList.add('found', 'clicked');

			// var clickedTiles = document.getElementsByClassName('clicked');
			if(document.getElementsByClassName('clicked').length === 2){
				Game.checkForMatch();
			}
		},

		// checkForMatch() function should retrieve the data-value of the two clicked tiles
		// if they are a match
		// the 'clicked' class should be removed from the tiles
		// the click event should be turned off for those tiles
		// should check for a win
		// if no match is found
		// the text of the clicked cards should be set back to empty
		// the found and clicked classes should both be removed
		checkForMatch : function() {
			var clickedTiles = document.getElementsByClassName('clicked');
			console.log(clickedTiles[0]);
			console.log(clickedTiles[1]);
			if(clickedTiles[0].getAttribute('data-value') === clickedTiles[1].getAttribute('data-value')){
				for(var i = clickedTiles.length - 1; i >= 0; i--) {
					console.log(clickedTiles[i]);
					clickedTiles[i].classList.remove('clicked');
				}
				this.checkForWin();
			}
			else {
				for(var i = clickedTiles.length - 1; i >= 0; i--) {
					clickedTiles[i].innerHTML = '';
					clickedTiles[i].classList.remove('clicked', 'found');
				}
			}
		},

		// checkForWin()
		// if the number of found tiles is 10
		// add a winning message to the info div
		// remove the found class
		// add a won class
		checkForWin : function() {
			var foundTileArray = document.getElementsByClassName('found');

			if(foundTileArray.length === 10) {
					infoDiv.textContent = 'Congratulation, you win!';
					for(var i = foundTileArray.length - 1; i >= 0; i--) {
						foundTileArray[i].classList.add('won');
						foundTileArray[i].classList.remove('found');
					}
			}
		}
	};

})();


window.onload = function() {
	console.log('loaded');
	var startBtn = document.getElementById('start-btn');
	startBtn.addEventListener('click', function() {
		// Invoke your chain of functions and listeners within window.onload
		Game.start();
		Game.makeAndDisplayTiles();
		Game.addEventsToTiles();
	});
}


// USE THIS TO SHUFFLE YOUR ARRAYS
function shuffle(o) {
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
};
