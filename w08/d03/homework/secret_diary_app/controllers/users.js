'use strict';

let express   = require('express');
let router    = express.Router();
let User      = require('../models/user.js')


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

router.route('/:id')
  .get((req, res) => {
    res.send('/users/:id');
  });

module.exports = router;
