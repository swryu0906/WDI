var mongoose  = require('mongoose');
    bcrypt    = require('bcrypt');

var User = new mongoose.Schema({
  name:     String,
  email:    String,
  password: String
});

User.pre('save', function(next){
  var user = this;

  if(!userObject.isModified('password')) return next();

  // generate a salt, with a saltwater mark of 5
  bcrypt.genSalt(5, function(err, salt){
    if(err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash){
      if(err) return next(err);

      //  this is our hashed password
      user.password = hash;
      next();
    })
  })
})

User.methods.authenticate = function(password, callback){
  // compare method that returns a boolean
  // if the first argument once encrypted corrsponds to the second argument

  bcrypt.compare(password, this.password, function(err, isMatched){
    callback(null, isMatch);
  });
}


module.exports = mongoose.model('User', User);
