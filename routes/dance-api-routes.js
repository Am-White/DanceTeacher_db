var db = require("../models");

module.exports = function(app) {
  app.get("/api/dances", function(req, res) {
    db.Dance.findAll({
      // include: [{
      //   model: db.Instructor
      // }]
    }).then(function(results) {
      res.json(results);
      // res.render("index", results);
      console.log(results)
    });
  });


  app.post("/api/dances", function(req, res) {
    db.Dance.create(req.body).then(function(results) {
      res.json(results);
    });
  });

  app.delete("/api/dances/:id", function(req, res) {
    db.Dance.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(results) {
      res.json(results);
    });
  });

};
