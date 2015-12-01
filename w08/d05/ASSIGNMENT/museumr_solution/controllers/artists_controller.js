var mongoose = require('mongoose'),
  Artist = require('../models/artists.js');

module.exports.controller = function(app) {
  //Artists- INDEX
  app.get("/artists", function(req, res) {
    Artist.find().populate('paintings').exec(function(err, artists) {
      if (err) return next(err);
      res.send(artists);
    });
  });

  //Artist- SHOW
  app.get("/artists/:id", function(req, res) {
    Artist.findById(req.params.id)
      .populate('paintings').exec(function(err, artist) {
        res.send(artist)
      });
  });

  //Artist - CREATE
  app.post("/artists", function(req, res) {
    var artist = new Artist(req.body);
    artist.save(function(err) {
      if (err) {
        console.log(err);
      } else {
        res.send(artist)
      }
    });
  });

  //Artist - UPDATE
  app.put("/artists/:id", function(req, res) {
    Artist.findOneAndUpdate({
      _id: req.params.id
    }, {
      $set: req.body
    }, function(err, artist) {
      res.send(artist);
    });
  });

  //Artist - DELETE
  app.delete("/artists/:id", function(req, res) {
    Artist.findOneAndRemove({_id: req.params.id}, function (err) {
      if(err) console.log(err);
      console.log("Artist deleted");
      res.send('Artist deleted');
    });
  });
}
