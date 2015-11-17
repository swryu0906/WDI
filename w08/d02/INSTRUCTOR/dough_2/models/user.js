var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var User = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

User.pre('save', function(next){
  var user = this;

  if (!user.isModified('password')) return next();

  // generate a salt, with a saltwater mark of 5
  bcrypt.genSalt(5, function(err, salt){
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash){
      if (err) return next(err);

      // this is our hashed password
      user.password = hash
      next();
    })
  })
})

User.methods.authenticate = function( password, callback) {
  // compare method that returns a boolean
  // if the first arguement once encrpted coresponds to the second argument
  bcrypt.compare(password, this.password, function(err, isMatch) {
    callback(null, isMatch);
  });
};

module.exports = mongoose.model('User', User);
