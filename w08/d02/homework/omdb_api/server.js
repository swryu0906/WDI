
// dependencies
var express       = require('express');
var request       = require('request');
var logger        = require('morgan');
var path          = require('path');
var bodyParser    = require('body-parser');
// var cookieParser  = require('cookie-parser');


var parseUrlencoded = bodyParser.urlencoded({ extended: false });
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(parseUrlencoded);
// app.use(cookieParser());
app.use(express.static('./public'))
app.set('port', (process.env.PORT || 3000));

// var router = express.R//souter();


// mongoose
var mongoose      = require('mongoose');
var Movie         = require('./models/movie');
mongoose.connect('mongodb://localhost/movies');


app.use('/', function(req, res){
  // request('http://www.omdbapi.com/?t=star+wars', function(err, res, body){
  //   // if(!err && res.statusCode == 200){
  //   //   console.log(body);
  //   // }
  // }).on('data', function(data){
  //   // console.log(data.toString());
  // })
});

app.post('/movies', function(req, res){
  res.send('post is received');
  console.log(req.body);
  var movieObj = new Movie(req.body.movie);

  moveObj.save(function(err, movieObj){
    if(err){
      console.log('Error!');
      return res.status(401).send({ message: err.errmsg });
    }
    else return res.status(200).send({ message: 'Movie was successfully created.'});
  });
});

var server = app.listen(app.get('port'), function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('OMDB API app is running.', 'host: ' + host, 'port: ' + port);
});
