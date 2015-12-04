var express    = require('express');
var app        = express();
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var routes     = require('./config/routes');
var morgan     = require('morgan');

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/',express.static('public'));



mongoose.connect('mongodb://localhost/anothersampledb');





app.use('/api', routes);




app.listen('8000');
console.log('connection successful');
