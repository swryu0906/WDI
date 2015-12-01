var mongoose = require('mongoose');

var PaintingSchema = new mongoose.Schema({
  title: String,
  img_url: String,
  year_made: Number
});

var Painting = mongoose.model('Painting', PaintingSchema);

module.exports = Painting;
