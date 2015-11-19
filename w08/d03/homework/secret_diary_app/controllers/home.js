'use strict';

let express   = require('express');
let router    = express.Router();

router.route('/')
  .get((req, res) => {
    res.json({ message: 'Welcome to Secret Diary App!' });
    // res.render('home')
  });

module.exports = router;
