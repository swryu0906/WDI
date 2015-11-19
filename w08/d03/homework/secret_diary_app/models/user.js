'use strict';

var mongoose    = require('mongoose');
let userSchema  = new mongoose.Schema({
  name:       String,
  email:      String,
  password:   String,
  created_at: Date,
  updated_at: Date
});

userSchema.pre('save', (next) => {
  let now = new Date();

  this.updated_at = now;
  if(!this.created_at){
    this.created_at = now;
  }
  next();
});

module.exports = mongoose.model('users', userSchema);
