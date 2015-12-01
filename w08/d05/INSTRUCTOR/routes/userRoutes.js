'use strict';
const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');
const expressJwt = require('express-jwt');
const secret = "omgbbqwtf"; // this needs to be moved out of the app!


/* so fresh and so clean! */

router.route('/user')
  .all(expressJwt({
    secret: secret,
    userProperty: 'auth'
  }))
  .get(user.retrieve) // protected!
  .put(user.update) //protected!
  .delete(user.destroy); //protected!

router.route('/user/auth')
  .post(user.auth);

router.route('/user/signup')
  .post(user.create);

module.exports = router;
