var db = require("../models");

module.exports = function(app) {
  app.get("/api/classes", function(req, res) {
    db.Class.findAll({
      include: [{model: db.Dance, as: "Dance"} , {model: db.Instructor, as: "Instructor"}]
    }).then(function(results) {
        res.json(results);
        console.log(results)
    });
  });

  app.get("/", function(req, res) {
    var classArray = [];
    db.Class.findAll({
    }).then(function(results) {
        // res.render("index", {results}); 
        // res.json(results);

        results.forEach(element =>
            classArray.push(element.dataValues));
        console.log(classArray)
        var hbsObject = {
            classes: classArray
          };
        console.log(hbsObject);
        res.render("index", hbsObject); 

    });
  });

  app.get("/api/classes/:danceId", function(req, res) {
    // 2. Add a join here to include the Author who wrote the Post
    db.Class.findOne({
      include: [{
        model: db.Dance
      }],
      where: {
        danceID: req.params.danceID
      }
    }).then(function(results) {
      console.log(results);
      res.json(results);
    });
  });


  app.post("/api/classes", function(req, res) {
    db.Class.create(req.body).then(function(results) {
      res.json(results);
    });
  });

  app.delete("/api/classes/:id", function(req, res) {
    db.Class.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(results) {
      res.json(results);
    });
  });

};
