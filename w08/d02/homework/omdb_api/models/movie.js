var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
  movie_title:  String,
  director:     String,
  actors:       [String],
  released:     Date,
  plot:         String,

  // created_at:   Date,
  // updated_at:   Date
});


var Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
