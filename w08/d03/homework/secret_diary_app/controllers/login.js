'use strict';

let express   = require('express');
let router    = express.Router();


router.route('/login')
  .get((req, res) => {
    res.send('Login page.');
  });

module.exports = router;
