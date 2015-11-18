var movie = {
  init: function(){
    this.addEventListeners();
  },

  addEventListeners: function(){
    $('form#movie-search').on('submit', this.searchMovie);
    $('form#movie-create').on('submit', this.createMovie);
    $('button#keep').on('click', this.keepMovie);
  },

  renderMovieData: function(movieData){
    var movieTemplate = Handlebars.compile($('template#movie').html());

    var $movieInfo = $('div.movie-info');
    var html = movieTemplate(movieData);
    $movieInfo.empty().append(html);
  },

  searchMovie: function(event){
    event.preventDefault();

    console.log($(this));

    var form = $(this);
    var title = form.find('.title').val();
    $.ajax({
      type: 'GET',
      url: 'http://www.omdbapi.com/?t=' + title
    }).done(function(movieData){
      console.log(movieData);
      movie.renderMovieData(movieData);
    });
  },

  createMovie: function(event){
    event.preventDefault();

    var form = $(this);
    var movieData = form.serialize();

    movie.postMovie(movieData);
  },

  keepMovie: function(event){
    event.preventDefault();

    var movieData = {};
    var movieDiv = $('.movie-info');
    movieData.title    = movieDiv.find('.title').text();
    movieData.director = movieDiv.find('.director').text();
    movieData.actors   = movieDiv.find('.actors').text();
    movieData.released = movieDiv.find('.released').text();
    movieData.plot     = movieDiv.find('.plot').text();

    serializedData = JSON.stringify(movieData);
    console.log(movieData);
    console.log(serializedData);
    movie.postMovie(serializedData);
  },

  postMovie: function(movieData){
    console.log(movieData);

    $.ajax({
      type: 'POST',
      url: '/movies',
    }).done(function(movieData){
      console.log("Movie was successfully created");
    });
  }
}





  // $('form#movie-create').on('submit', function(e){
  //   e.preventDefault();
  //   var form = $(this);
  //   // var queryData = form.serialize();
  //
  //   var title = form.find('.title').val();
  //   console.log('queryData = ' + title);
  //   console.log('http://www.omdbapi.com/?t=' + title);
  //
  //   $.ajax({
  //     type: 'POST',
  //     url: 'http://www.omdbapi.com/?t=' + title
  //   }).done(function(movieData){
  //     console.log(movieData);
  //     renderMovie(movieData);
  //
  //   });
  // });


  // $('#keep').on('click', function(e){
  //   e.preventDefault();
  //   var movieObj = {};
  //   var movieDiv = $('.movie-info');
  //   movieObj.title    = movieDiv.find('.title').text();
  //   movieObj.director = movieDiv.find('.director').text();
  //   movieObj.actors   = movieDiv.find('.actors').text();
  //   movieObj.released = movieDiv.find('.released').text();
  //   movieObj.plot     = movieDiv.find('.plot').text();
  //
  //   console.log(movieObj);
  //
  //   $.ajax({
  //     type: 'POST',
  //     url: 'http://localhost:3000/movies',
  //     data: movieObj
  //   }).done(function(movieObj){
  //     console.log('Movie was successfully created.');
  //   }).fail(function(){
  //
  //   });
  // });
  //
  // $('#movie-create').on('submit', function(e){
  //   e.preventDefault();
  //   var form = $(this);
  //   var movieObj = form.serialize();
  //
  //   $.ajax({
  //     type: 'POST',
  //     url: '/movies',
  //     data: movieObj
  //   }).done(function(movieObj){
  //     console.log('Movie was successfully created.');
  //   });
  // })
  //
  // var renderMovie = function(movieData){
  //   var movieInfoDiv = $('div.movie-info');
  //   var html = movieTemplate(movieData);
  //   movieInfoDiv.empty().append(html);
  //   console.log(html);
  // };

$(function(){
  movie.init();
});
