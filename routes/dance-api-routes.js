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

  app.get("/dances", function(req, res) {
    var danceArray = [];
    db.Dance.findAll({
    }).then(function(results) {
        results.forEach(element =>
          danceArray.push(element.dataValues));
        console.log(danceArray)
        var hbsObject = {
            dances: danceArray
          };
        console.log(hbsObject);
        res.render("index", hbsObject); 

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
