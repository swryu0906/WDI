var express = require('express');


var User    = require('../models/user');
var jwt     = require('jsonwebtoken');
var routes  = express.Router();
// var secret = 'beniscool';


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
        res.json({
          success: true,
          message: 'You are authed'
        });

      }
    }

    }


  );
});

// route middleware to verify token above protected routes.  Order is important.


routes.get('/users', function(req, res){

  User.find({}, function(err, users){
    var userMap = [];

    users.forEach(function(user){
      userMap.push(user.name);
    });
    res.send(userMap);
  });

});


module.exports = routes;
