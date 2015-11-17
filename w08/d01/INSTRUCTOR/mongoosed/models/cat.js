var mongoose = require('mongoose');

var catSchema = new mongoose.Schema({
  name: String,
  color: String,
  owners: {
    family: String,
    address: String
  },
  created_at: Date,
  updated_at: Date

});

catSchema.methods.allCats = function(){

};

catSchema.methods.createCats = function(){

};

catSchema.methods.deleteCats = function(id){

};

var Cat = mongoose.model('Cat', catSchema);
module.exports = Cat;

/*

Using the code we just wrote and the official Mongoose Models docs. Add custom three sers.js:
​
/all, this will return all the documents
​
/create, given some arguments in the url, this method will create a user record.
​
/delete/:id, will remove the document corresponding to the collection
​
Try them out in the node terminal, if you have time.

*/
