var application_root = __dirname;
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    fs = require('fs');


var server = app.listen(3000, function () {
  console.log("This app is running on Port 3000")
})

app.use(express.static('public'))
app.use(bodyParser());
app.use(logger('dev'))

//Connect to mongodb
mongoose.connect('mongodb://localhost/museumrApp', function (err) {
  if(err){
    console.log('connection error', err);
  } else {
    console.log('connection successful');
  }
});

//Controllers
fs.readdirSync('./controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./controllers/' + file);
      route.controller(app);
  }
});

//Root
app.get("/", function (req, res) {
});
