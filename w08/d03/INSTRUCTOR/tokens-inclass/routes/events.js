'use strict';
let express = require('express');
let router = express.Router();
let IftttEvent = require('../models/iftttEvent');

router.route('/')
  .get((req, res, next) => {
    // find events
    IftttEvent.find({ name: 'cheetos'}, (err, cheetos_event) =>{
      if (err) throw err;
      res.send(cheetos_event);
    });


  })
  .post((req, res, next) => {
    // create event
    let myIftttEvent = new IftttEvent({
      name: 'cheetos'
    });

    myIftttEvent.save((err) => {
      if (err) throw err;
      console.log('ifttt event saved!');
    });

    res.send('saved');
  });

module.exports = router;
