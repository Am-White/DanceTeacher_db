// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/instructors", function(req, res) {
    db.Instructor.findAll({
    }).then(function(results) {
      res.json(results);
      console.log(results);
    });
  });


  // POST route for saving a new post
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

  // DELETE route for deleting posts
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
