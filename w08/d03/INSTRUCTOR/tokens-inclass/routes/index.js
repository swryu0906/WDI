'use strict';
let express = require('express');
let router = express.Router();
let Event = require('../models/iftttEvent');

router.route('/')
  .get((req, res, next) => {
    res.send('yay');
  });

module.exports = router;
