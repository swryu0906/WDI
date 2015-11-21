'use strict';
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

/*
* Our User model, mogoose uses this to validate against! User is a collection
* of users in our database.
*
* This file is basically just a module and our User model is basically
* a "class" and mongoose is doing some work behind the scenes
* to make the validations work.
*
* I've made it constant because we won't be reassigning it.
*/
let User = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true}
});

User.pre('save', function(next) { //need a function expression :(
  let user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();


  // Generate a salt, with a salt_work_factor of 5
  bcrypt.genSalt(5, (err, salt) => {
    if (err) return next(err);

    // Hash the password using our new salt
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);

      // Override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});


User.methods.authenticate = function(password, callback) {
  // Compare is a bcrypt method that will return a boolean,
  // if the first argument once encrypted corresponds to the second argument
  bcrypt.compare(password, this.password, function (err, isMatch) {
    callback(null, isMatch);
  });
};

module.exports = mongoose.model('User', User);
