var mongoose = require('mongoose'),
  Painting = require('../models/paintings.js'),
  Artist = require('../models/artists.js');

module.exports.controller = function(app) {
  //Painting - INDEX
  app.get('/paintings', function(req, res) {
    Painting.find().exec(function(err, paintings) {
      if (err) return next(err);
      res.send(paintings);
    });
  });


  //Painting - CREATE

  app.post("/artists/:id/paintings", function(req, res) {
    Artist.findById(req.params.id).exec(function(err, artist) {
      var painting = new Painting(req.body);
      painting.save(function(err) {
        if (err) {
          console.log(err)
        } else {
          artist.paintings.push(painting._id);
          artist.save(function(err) {
            if (err) {
              console.log(err)
            } else {
              res.send(artist);
            }
          })
        }
      });
    });
  });

  //Painting - DELETE
  app.delete("/paintings/:id", function(req, res) {
    Painting.findOneAndRemove({_id: req.params.id}, function (err) {
      if(err) console.log(err);
      console.log("Artist deleted");
      res.send('Artist deleted');
    });
  });
}
