'use strict';

let express     = require('express');
let path        = require('path');
let bodyParser  = require('body-parser');
let jwt         = require('jsonwebtoken');
let expressjJWT = require('express-jwt');
let bcrypt      = require('bcrypt');

let router      = express.Router();
let User        = require('../models/user')
let key         = require('../secret_key')

router.route('/')
  .get((req, res) => {
    User.find({}, function(err, users){
      res.json(users);
    })
  })
  .post((req, res) => {
    var sungwon = new User({
      name: 'Sungown Ryu',
      email: 'swryu0906@gmail.com',
      password: '1234',
    });

    sungwon.save((err) => {
      if(err) throw err;

      console.log('User saved successfully');
      res.json({ success: true });
    });
  });

router.route('/login')
  .get((req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if(err) throw err;

      if(!user){
        res.json({
          success: false,
          message: 'User authentication has failed. User not found.'
        });
      }
      else if(user.password != req.body.password){
        res.json({
          success: false,
          message: 'User authentication has failed. Wrong password.'
        });
      }
      else {
        let token = jwt.sign(user, key.secret);
        res.json({
          success: true,
          message: 'User authentication has succeeded.',
          token: token
        });
      }
    })
  });

router.route('/:id')
  .get((req, res) => {
    User.find({ id: req.body.id }, (err, user) => {

    });
  });

module.exports = router;
