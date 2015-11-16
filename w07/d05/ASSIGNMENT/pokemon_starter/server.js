var express   = require('express');
var logger    = require('morgan');
var pokemons  = require('./poke_array.js');
var app       = express();

// module for parsing pokemon JSON data
var parseData = require('./parse_data.js');

app.use(logger('dev'));
app.use(express.static('./public'));
app.set('port', (process.env.PORT || 3000));

var server = app.listen(app.get('port'), function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('pokemon app is running.', 'host: ' + host, 'port: ' + port);
});


// WRITE YOUR ROUTES BELOW!!!

app.get('/', function(req, res) {
});

app.get('/pokemons', function(req, res){
  res.send(pokemons)
});

app.get('/pokemons/searchByName', function(req, res){
  var name = req.query.name;
  // res.send(name);
  // res.send(req.query);
  var result = parseData.searchByName(pokemons, name);
  res.send(result);
});

app.get('/pokemons/searchByType', function(req, res){
  var type = req.query.type;
  var resultArray = parseData.searchByType(pokemons, type);
  res.send(resultArray);
});

app.get('/pokemons/random', function(req, res){
  var result = parseData.random(pokemons);
  res.send(result);
});

app.get('/pokemons/:id', function(req, res){
  var id = req.params.id;
  var result = parseData.searchById(pokemons, id);
  res.send(result);
});
