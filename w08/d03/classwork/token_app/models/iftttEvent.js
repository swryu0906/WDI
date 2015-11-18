'use strict';

let mongoose = require('mongoose');

let iftttEventSchema = new mongoose.Schema({
  name:       String,
  created_at: Date,
  updated_at: Date
});

iftttEventSchema.pre('save', (next) => {
  let now = new Date();
  this.updated_at = now;
  if(!this.created_at){
    this.created_at = now;
  }
  next();
});

module.exports = mongoose.model('iftttEvent', iftttEventSchema);
