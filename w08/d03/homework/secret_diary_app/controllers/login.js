'use strict';

let express   = require('express');
let router    = express.Router();
let User      = require('../models/user.js')

router.route('/')
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
      // else {
      //   var token = jwt
      // }
    })
  });

module.exports = router;
