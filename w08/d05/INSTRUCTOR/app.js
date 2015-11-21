'use strict'; //ES6 Woo hoo!
const path = require('path'); // Using const because this does not change!
const logger = require('morgan');
let bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');


app.use(logger('dev')); // gives us more info of our requests
app.use(bodyParser.json()); //needs to come before routes and be json!
app.use('/', userRoutes); //all our user routes

app.post('/hey', (req, res) => {
  console.log("req body", req.body);
  res.send(req.body);
});

/*  the path you provide to express.static is relative to the directory
where you launch your node process.
*
* it’s safer to use the absolute path of the directory you want to serve:
*/
app.use('/', express.static(__dirname + '/public'));

/*
* connect to the database
* this will change when we deploy to heroku
*/
mongoose.connect('mongodb://localhost/tokensandauth');

/* get notified that the database has connected */
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('db connected');
});

const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
