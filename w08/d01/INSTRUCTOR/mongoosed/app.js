var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/catdb');
var Cat = require('./models/cat');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("Connected!!")
});


/* create a new cat */
var kitty = new Cat({ name: 'Zildjian' });

/* create */
kitty.save(function (err) {
  if (err){
    console.log(err);
  } else {
    console.log('meow');
  }
});

console.log(kitty.name);

/* retrieve */
/* notice use of model name! */
Cat.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
});

/* update  (find one)*/
Cat.findOneAndUpdate({ name: 'Zildjian' }, { owners: { family: "Salahuddins" } },
function(err, user) {
  if (err){
    console.log(err);
  } else {
    console.log(user);
  }
});

/* destroy! */

Cat.findOneAndRemove({ first_name: 'Zildjian' }, function(err) {
  if (err){
    console.log(err);
  } else {
    console.log('Cat deleted!');
  }
});
