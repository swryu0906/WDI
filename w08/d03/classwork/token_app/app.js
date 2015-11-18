'use strict';

let express     = require('express');
let path        = require('path');
let logger      = require('morgan');
let bodyParser  = require('body-parser');
let expressJWT  = require('express-jwt');
let jwt         = require('jsonwebtoken');

let routes      = require('./routes/index');
let events      = require('./routes/events');

let app         = express();
const secret    = 'omgok';

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

let mongoose    = require('mongoose');
mongoose.connect('mongodb://localhost/ifttt');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', (callback) => {
  console.log('mongoose connected');
});

// routes
app.use('/events', expressJWT({ secret: secret }));
app.use((error, req, res, next) => {
  if(erorr.name === 'UnauthorizedError'){
    res.status(401)
      .json({ message: 'Yor need an Auth token!'});
  }
});
app.use('/', routes);
app.use('/events', events);


// app.post('/authorization', () => {
//   // some code to check that a user's credentials are right (bcrypt)
//
//   // collect any information we want to include in our token, like user
//   // info
//
//   // make a token & send it as JSON
// });

app.post('/authorization', (req, res) => {
  let fakeUser = {
    name: 'Drake',
    id:   '123456'
  }

  // let's make a toke already
  let token = jwt.sign(fakeUser, secret);
  response.json({ user: fakeUser, token: token });
});


let server = app.listen(5000, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log('token app is running', 'host: ' + host, 'port: ' + port);
});
