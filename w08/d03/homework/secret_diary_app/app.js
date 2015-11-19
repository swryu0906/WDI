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


const secret = 'IlikeGA!!!!';

let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// routes
let home        = require('./controllers/home');
let login       = require('./controllers/login');
let users       = require('./controllers/users');

app.use('/', home);
app.use('/login', login);
app.use('/users', users);

var port = process.env.PORT || 3000;

let server = app.listen(port, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log('secret diary app is running', 'host: ' + host, 'port: ' + port);
});
