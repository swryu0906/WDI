var express = require('express');
// var logger = require('morgan');

var app = express();
// app.use(logger('dev'));
app.use(express.static('./public'));
app.set('port', (process.env.PORT || 3000));


var mongoose = require('mongoose');

var vampireArray = require('./populateVampires.js');
var Vampire = require('./models/vampire.js');


// connect to the mongodb
mongoose.connect('mongodb://localhost/vampireDB', function(error, db){
  if(error) console.log(error);
  console.log('connected to vampireDB');

  Vampire.remove(function(err, p){
    if(err) throw err;
    else console.log('No of Documents deleted: ' + p);
  });

  Vampire.collection.insert(vampireArray, function(err, data){
    if(err) throw err;
    else console.log('Vampires were successfully stored.', data.length);
  });

  process.on('exit', function(){
    mongoose.close();
  });
});
