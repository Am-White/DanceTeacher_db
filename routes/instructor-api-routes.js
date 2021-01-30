
// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {


  app.get("/api/instructors", function(req, res) {
    db.Instructor.findAll({
    }).then(function(results) {
      res.json(results);
      console.log(results);
    });
  });


  app.post("/api/instructors", function(req, res) {
    db.Instructor.create({
      name: req.body.name,
      lastName: req.body.lastName,
      rating: req.body.rating,
      location: req.body.location,
      hourlyRate: req.body.hourlyRate
    }).then(function(results) {
      res.json(results);
    });
  });


  app.put("/api/instructors/:id", function(req, res) {
    db.Instructor.update({
      rating: req.body.rating,
      location: req.body.location,
      hourlyRate: req.body.hourlyRate
    }, {
      where: {
      id: req.params.id}
    }).then(function(results) {
      res.json(results);
    });
  });


  app.delete("/api/instructors/:id", function(req, res) {
    db.Instructor.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(results) {
      res.json(results);
    });
  });

};
