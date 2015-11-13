var express  = require('express');
var logger   = require('morgan');
var pokemons = require('./poke_array.js');
var app      = express();

app.use(logger('dev'));
app.use(express.static('public'));
app.listen(3000);

// WRITE YOUR ROUTES BELOW!!!

app.get('/', function(req, res) {

});