'use strict';

let express   = require('express');
let router    = express.Router();



router.route('/users')
  .get((req, res, next) => {
    res.send('/users');
  })
  .post((req, res) => {

  });

router.route('/users/:id')
  .get((req, res) => {
    res.send('/users/:id');
  });


module.exports = router;
