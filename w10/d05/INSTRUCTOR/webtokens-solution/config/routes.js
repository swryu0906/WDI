var express = require('express');


var User    = require('../models/user');
var jwt     = require('jsonwebtoken');
var routes  = express.Router();
var secret = 'beniscool';


routes.get('/seed', function(req, res){
  var ben = new User({
    name: 'Ben',
    password: '123',
    admin: true
  });


  ben.save(function(err){
    if(err) throw err;

    console.log('Ben saved');
    res.json({success: true});
  });
});

routes.get('/', function(req, res){
  res.render('index');
});

routes.post('/authenticate', function(req, res){
  console.log('this is the body' + req.body.name);
  User.findOne({
    name: req.body.name
  }, function(err, user){
    if(err) throw err;

    if(!user) {
      res.json({success: false, message: "auth failed"})
    } else if(user){
      if(user.password != req.body.password){
        res.json({success: false, message: 'login failed'})
      } else{
        //this is where we initiate a token and add it to what we send back to client
        var token = jwt.sign(user, secret, { expiresIn: 144400 });

        res.json({
          success: true,
          message: 'You are authed',
          token: token
        });

      }
    }

    }


  );
});


// route middleware to verify token above protected routes.  Order is important.
// route middleware to verify a token
routes.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({
        success: false,
        message: 'No token provided, dude.'
    });

  }
});

routes.get('/users', function(req, res){

  User.find({}, function(err, users){
    var userMap = [];

    users.forEach(function(user){
      userMap.push(user.name);
    });
    res.send(userMap);
  });

});

routes.get('/me', function(req, res){
 res.send(req.decoded);
});

module.exports = routes;
