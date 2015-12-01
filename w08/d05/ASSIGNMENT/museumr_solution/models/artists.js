var mongoose = require('mongoose'),
    PaintingSchema = require('./paintings.js').schema;


var ArtistSchema = new mongoose.Schema({
  name: String,
  img_url: String,
  nationality: String,
  birthYear: Number,
  description: String,
  paintings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Painting'
    }]
});

var Artist = mongoose.model('Artist', ArtistSchema)

module.exports = Artist;
