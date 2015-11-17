var mongoose = require('mongoose');

var vampireSchema = new mongoose.Schema({
  name: String,
  hair_color: String,
  eye_color: String,
  dob: Date,
  loves: [String],
  location: String,
  gender: String,
  victims: Number,
  title: String,

  created_at: Date,
  updated_at: Date
});

var Vampire = mongoose.model('Vampire', vampireSchema);

module.exports = Vampire;
