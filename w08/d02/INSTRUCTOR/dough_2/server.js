var request = require('request');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('./public'))
var mongoose = require('mongoose');
var User = require('./models/User');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

mongoose.connect('mongodb://localhost:27017/doughnut_authentications')

app.get('/', function(req, res){

})
// user : { name: name }
app.post('/signup', function(req, res){
   var userObject = new User(req.body.user);

   userObject.save(function(err, user) {
     if (err) {
       return res.status(401).send({message: err.errmsg});
     } else {
        return res.status(200).send({message: "user created"})
     }
   });
})

app.post('/login', function(req, res){
  var userParams = req.body.user;

  User.findOne({ email: userParams.email }, function(err, user) {
    user.authenticate(userParams.password, function(err, isMatch){
      if (err) throw err;

      if (isMatch) {
        return res.status(200).send({message: "Valid Credentials !"})
      } else {
        return res.status(401).send({message: "unauthorized"})
      }
    })
  })

})





app.get('/doughnuts', function(req, res){
  console.log('hit /doughnuts');
  request('http://api.doughnuts.ga/doughnuts', function(err, res, body) {

  }).on('data', function(data) {
    res.send(data);
  })
})

app.get('/doughnut-styles', function(req, res){
  console.log('hit /doughnut-styles');
  doughnutClient('http://api.doughnuts.ga/doughnuts', function(body){
    res.send(parseDoughnuts(body, 'style'))
  })

})

var doughnutClient = function(url, callback) {
  request(url, function(err, res, body){
    if (!err && res.statusCode == 200) {
      callback(body)
    }
  })
}

var parseDoughnuts = function(data, attr) {
  jsonData = JSON.parse(data);
  newData = []
  for (var i = 0; i < jsonData.length; i++) {
    newData.push(jsonData[i][attr])
  }
  return newData
}

var server = app.listen(3000, function() {
   var host = server.address().address;
   var port = server.address().port;
   console.log('started')
});
