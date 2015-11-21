'use strict';
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const secret = "omgbbqwtf"; // this needs to be moved out of the app!



function create(req, res){
  /* object used to create our token! */
  console.log(req.body.user);
  var userObject = new User(req.body.user);

  userObject.save((err, user) => {
    if(err){
      return res.status(401).send({message: err.errmsg});
    } else {
      return res.status(200).send(user);
    }
  });
}

function retrieve(req, res){
  //ALL users, watch out this includes the password hash! transform your data.
  User.find({}, function(err, users){
    res.send(users);
  })
}

function update(req, res){

  var userParams = req.body.user;

  User.findOne({ email: userParams.email }, function(err, user) {
    user.update(
      { email: userParams.email },
      { email: userParams.newEmail, name: userParams.newName },
      function(err, user){
        //finally
        res.send(user);
      });
  });
}

function destroy(req, res){

  var userParams = req.body.user;
  User.findOne({ email : userParams.email}, function (err, user) {
    if (err) {
        return;
    }
    user.remove(function (err) {
        // if no error, your model is removed
        res.send({"record" : "deleted"});
    });
  });

}

function auth(req, res){

  var userParams = req.body.user;
  console.log(req.body.user);
  // Validation for undefined email or password
  if (userParams.email == undefined || userParams.password == undefined)
  return res.status(401).send({message: "Please provide correct credentials"});

  User.findOne({ email: userParams.email }, function(err, user) {
    console.log(user);
    /* mongoose method with similar name! */
    user.authenticate(userParams.password, function (err, isMatch) {
      if (err) throw err;
      /* let's check if the password match then generate a token! */
      if (isMatch) {
        return res.status(200).send({message: "Valid Credentials", token: jwt.sign(user, secret)});
      } else {
        return res.status(401).send({message: "Invalid Credentials"});
      }
    });
  });
}

module.exports = {
  create: create,
  retrieve: retrieve,
  update: update,
  destroy: destroy,
  auth: auth
}
