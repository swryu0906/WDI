window.onload = function() {
  console.log('Loaded, bro');
  var button = document.getElementsByTagName('button')[0]
    button.addEventListener('click', function() {
      console.log('Starting a game!');
      memoryGame.start();
    });
};
// USE THIS TO SHUFFLE YOUR NUMBERS
// //+ Jonas Raoni Soares Silva
// //@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o) { //v1.0
  for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};
var memoryGame = {
  // set game tiles
  tiles: ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'],
  start: function() {
    // shuffle the game tiles
    this.tiles = shuffle(this.tiles);
    // create and display DOM tiles
    this.makeAndDisplayTiles();
  },
  makeAndDisplayTiles: function() {
    //grab the game div and set it to blank
    var tileContainer = document.getElementById('game');
    tileContainer.innerHTML = "";
    //do the same to footer
    var footer = document.getElementById('footer');
    footer.innerHTML = '';
    //create 10 divs and add the class column to them
      for (var i = 0; i < 10; i++) {
        var div = document.createElement('div');
        div.setAttribute("class", "column");
        //set the data-value to an element of the current div from tiles array
        div.setAttribute("data-value", this.tiles[i])
        //append those divs to tileContainer div
        tileContainer.appendChild(div);
      }
       //run the function that will add event listenter to each tile
      this.addEventsToTiles();
   },
   addEventsToTiles: function() {
     console.log(this, 'in add events to tile');
     //grab all the divs with class name column
     var gameTiles = document.getElementsByClassName('column');
     //store the current obj this into variable game
     var game = this;
     //create a loop that will do stuff to each game tile div
     for (var i = 0; i < gameTiles.length; i++) {
       //add an event listener to current div tile
       gameTiles[i].addEventListener("click", function() {
       console.log(this, "in click event");
       //store the current obj this into tile
       var tile = this;
       //run the makePlay function to change tile divs
       game.makePlay(tile)
     });
    }
  },
  makePlay: function(tile) {
    console.log('Making a play', this, tile);
    //store the tile obj into the variable currentTile
    var currentTile = tile;
    //grab that div and it's data-value
    var tileValue = currentTile.getAttribute('data-value');
    //set the text of that tile it's data-value
    currentTile.textContent = tileValue
      //add the class found and clicked to that div
    currentTile.classList.add('found');
    currentTile.classList.add('clicked');
    //if there are two tiles clicked run the checkForMatch function
    if (document.getElementsByClassName('clicked').length === 2) {
      this.checkForMatch();
    }
  },
  checkForMatch: function() {
    //grab by class the things that has clicked and get there data-value
    var clicked1 = document.getElementsByClassName('clicked')[0].getAttribute('data-value');
    var clicked2 = document.getElementsByClassName('clicked')[1].getAttribute('data-value');
    //if they match
    if (clicked1 === clicked2) {
      var clickedArray = document.getElementsByClassName('clicked');
      console.log(clickedArray[0].classList.remove("clicked"));
      var clickedArray = document.getElementsByClassName('clicked');
      console.log(clickedArray[0].classList.remove("clicked"));
      //run the checkForWin function
      this.checkForWin();
    } else {
      console.log("hold up!!")
        //if they don't match
        setTimeout(function(){
          var clickedArray = document.getElementsByClassName('clicked');
          clickedArray[0].innerHTML = "";
          clickedArray[0].classList.remove("found");
          clickedArray[0].classList.remove("clicked");
          var clickedArray = document.getElementsByClassName('clicked');
          clickedArray[0].innerHTML = "";
          clickedArray[0].classList.remove("found");
          clickedArray[0].classList.remove("clicked");
        }, 250);
    };
  },
  checkForWin: function() {
    //grab all the found tiles if it's 10
    var foundTiles = document.getElementsByClassName('found');
    if (foundTiles.length === 10) {
      document.getElementById('footer').textContent = ('WINNER WINNER...click start to play again');
      //foundTiles.addClass('won').removeClass('found');
    }
  }
};

