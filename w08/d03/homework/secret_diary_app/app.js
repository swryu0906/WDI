'use strict';

// dependencies
let express     = require('express');
let logger      = require('morgan');
let path        = require('path');
let bodyParser  = require('body-parser');
let jwt         = require('jsonwebtoken');
let expressjJWT = require('express-jwt');
let bcrypt      = require('bcrypt');

// mongoose db connection
let mongoose    = require('mongoose');
mongoose.connect('mongodb://localhost/secret_diary');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', (callback) => {
  console.log('mongoose connected');
});

let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

let key = require('secret_key');


// routes
let home        = require('./controllers/home');
// let login       = require('./controllers/login');
let users       = require('./controllers/users');

// route to verify a token
var route = express.Router();

route.use((req, res, next) => {
  // check header or url parameter or post parameters for token
  var token =
    req.body.token || req.query.token || req.headers['x-access-token'];

  if(token){

    // verify token
    jwt.verify(token, key.secret, (err, decoded) => {
      if(err){
        return res.json({
          success: false,
          message: 'Token authentication failed'
        });
      }
      else {
        req.decoded = decoded;
        next();
      }
    });
  }
  else {
    // if there is no token, return an error
    return res.json({
      success: false,
      message: 'Error, no token provided'
    });
  }
});


app.use('/', home);
// app.use('/login', login);
app.use('/users', users);

var port = process.env.PORT || 3000;

let server = app.listen(port, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log('secret diary app is running', 'host: ' + host, 'port: ' + port);
});
