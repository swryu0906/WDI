'use strict';
let mongoose = require('mongoose');

let iftttEventSchema = new mongoose.Schema({
  name: String,
  created_at: Date,
  updated_at: Date
});

iftttEventSchema.pre('save', (next) => {
  let now = new Date();
  // only update updated_at if there is created_at
  this.updated_at = now;
  if ( !this.created_at ){
    this.created_at = now;
  }
  next();
});

let iftttEvent = mongoose.model('iftttEvent', iftttEventSchema);

module.exports = iftttEvent;
