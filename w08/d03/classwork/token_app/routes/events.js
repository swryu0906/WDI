'use strict';

let express     = require('express');
let router      = express.Router();
let IftttEvent  = require('../models/iftttEvent');


router.route('/events')
  .get((req, res, next) => {
    // find events
    IftttEvent.find({ name: 'cheetos'}, (err, events) => {
      if(err) throw err;
      res.send(events);
    });





    // let myIfttt_event = new IftttEvent({
    //   name: 'cheetos'
    // });
    //
    // myIfttt_event.save((err) => {
    //   if(err) throw err;
    //   console.log('ifttt event saved!');
    // })
    //
    // res.send('Saved!');
  })

  .post((req, res, next) => {
    // create events

    let myIftttEvent = new IftttEvent({
      name: 'cheetos'
    });

    myIftttEvent.save((err) => {
      if(err) throw err;
      console.log('ifttt event saved!');
    });

    res.send('Saved!');
  });


module.exports = router;
