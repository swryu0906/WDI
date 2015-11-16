var pokemons = {
  init: function(){
    this.addEventListeners();
  },

  addEventListeners: function(){
    console.log("this = " + this);
    $("#search").on("click", "#search-by-name", this.searchByName);
    $("#search").on("click", "#search-by-type", this.searchByType);
    $("#search").on("click", "#search-by-id", this.searchById);
    $("#search").on("click", "#random-button", this.searchRandom);
  },

  searchByName: function(event){
    event.preventDefault();
    var name = $("#search-name-field").val();
    // variable self saves this which is pokemons object, itself
    var self = pokemons;
    $.ajax({
      url: '/pokemons/searchByName?name=' + name,
      context: self
    }).done(function(result){
      self.displayPokeInfo(result);
    });
  },

  searchByType: function(event){
    event.preventDefault();
    var type = $("#search-type-field").val();
    var self = pokemons;
    $.ajax({
      url: '/pokemons/searchByType?type=' + type,
      context: self
    }).done(function(resultArray){
      self.displayPokemons(resultArray);
    });
  },

  searchById: function(event){
    event.preventDefault();
    var id = $("#search-id-field").val();
    var self = pokemons;
    $.ajax({
      url: '/pokemons/' + id,
      context: self
    }).done(function(result){
      self.displayPokeInfo(result);
    });
  },

  searchRandom: function(event){
    event.preventDefault();
    var self = pokemons;
    $.ajax({
      url: '/pokemons/random',
      context: self
    }).done(function(result){
      self.displayPokeInfo(result);
    });
  },

  displayPokemons: function(pokemonsArray){
    this.resetDivs('pokemons');
    var resultsContainer = $("#results-container");

    for(var i in pokemonsArray){
      var pokemonDiv = $("<div></div>").addClass('result');
      var pokemonName = $("<h3></h3>").text(pokemonsArray[i]['name']);
      var pokemonImg = $("<img>").attr('src', pokemonsArray[i]['img']);
      pokemonDiv.append(pokemonName).append(pokemonImg);
      pokemonDiv.appendTo(resultsContainer);
    }
    resultsContainer.show();
  },


  displayPokeInfo: function(pokemon){
    this.resetDivs('solo-pokemon');
    var soloDiv = $("#solo-pokemon");

    // orderedKeys contnains the keys in the order of
    // being inserted to #solo-pokemon div
    var orderedKeys = ['name', 'img', 'classification', 'type', 'hp', 'attack', 'defense', 'moves', 'happiness', 'height'];

    // name: h3 tag
    // image: img tag
    // classification: p tag
    // species/type: p tag for each
    // hp: p tag
    // attack: p tag
    // defense: p tag
    // moves: each a p tag
    // happiness: p tag
    // height: p tag

    var key;
    for(var i = 0; i < orderedKeys.length; i++){
      key = orderedKeys[i];
      switch(key){
        case 'name':
          // $("<h3></h3>").text(key + ': ' + pokemon[key]).appendTo(soloDiv);
          $("<h3></h3>").text(pokemon[key]).appendTo(soloDiv);
          break;
        case 'img':
          $("<img>").attr('src', pokemon[key]).appendTo(soloDiv);
          break;
        case 'type':
        case 'moves':
          $("<p></p>").text(key + ': ' + pokemon[key]).appendTo(soloDiv);
          break;
        case 'classification':
        case 'happiness':
        case 'height':
          $("<p></p>").text(key + ': ' + pokemon['misc'][key]).appendTo(soloDiv);
          break;
        case 'hp':
        case 'attack':
        case 'defense':
          $("<p></p>").text(key + ': ' + pokemon['stats'][key]).appendTo(soloDiv);
      }
    }


  },

  resetDivs: function(option){

    // depending on the given option,
    // hide or show the divs and empty them.
    switch(option){
      case 'pokemons' :
        $("#results-container").empty().show();
        $("#solo-pokemon").hide();
        break;
      case 'solo-pokemon' :
        $("#results-container").hide();
        $("#solo-pokemon").empty().show();
    }
  }

};

$(document).ready(function(){
  pokemons.init();
});
