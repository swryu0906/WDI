var request     = require('request'),
    express     = require('express'),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose'),
    User        = require('./models/user');
    cookieParser = require('cookie-parser');

var app = express();
app.use(express.static('./public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose.connect('mongodb://localhost/donut_authentications');

app.get('/', function(req, res){
});


app.post('/signup', function(req, res){
  var userObject = new User(req.body.user);

  userObject.save(function(err, user){
    if(err){
      return res.status(401).send({ message: err.errmsg });
    }
    else {
      return res.status(200).send({ message: 'user is created.'});
    }
  });
});


app.post('/login', function(req, res){
  var userParams = req.body.user;

  User.findOne({ email: userParams.eamil }, function(err, user){
    user.authenticate(userParams.password, function(err, isMatch){
      if(err) throw err;

      if(isMatch){
        return res.stat(200).send({ message: "Valid Credentials"});
      }
      else {
        return res.stat(401).send({ message: "Unauthorized"});
      }
    })
  });

});






app.get('/donuts', function(req, res){
  request('http://api.doughnuts.ga/doughnuts', function(err, res, body){
  }).on('data', function(data){
    res.send(data.toString());
  });
});

app.get('/styles', function(req,res){
  request('http://api.doughnuts.ga/doughnuts', function(err, res, body){
  }).on('data', function(data){
    res.send(parseData(data, 'style'));
  });
});

app.get('/flavors', function(req, res){
  request('http://api.doughnuts.ga/doughnuts', function(err, res, body){
  }).on('data', function(data){
    res.send(parseData(data, 'flavor'));
  });
});

var parseData = function(data, key){
  var jsonData = JSON.parse(data);
  var parsedData = [];
  for(var i in jsonData){
    var donut = {}
    donut['id'] = jsonData[i]['id'];
    donut[key] = jsonData[i][key];
    parsedData.push(donut);
  }
  return parsedData;
}



var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('dough 2 is running.');
});
