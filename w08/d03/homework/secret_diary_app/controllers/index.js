'use strict';

let express   = require('express');
let router    = express.Router();


router.route('/')
  .get((req, res) => {
    res.send('Hi, this is index');
  });

module.exports = router;
