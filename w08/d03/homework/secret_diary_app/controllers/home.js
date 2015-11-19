'use strict';

let express   = require('express');
let router    = express.Router();


router.route('/')
  .get((req, res) => {
    res.send('Hi, this is home');
  });

module.exports = router;
