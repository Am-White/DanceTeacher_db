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

  // app.get("/", function(req, res) {
  //   var classArray = [];
  //   db.Class.findAll({
  //   }).then(function(results) {
  //       results.forEach(element =>
  //           classArray.push(element.dataValues));
  //       console.log(classArray)
  //       var hbsObject = {
  //           classes: classArray
  //         };
  //       console.log(hbsObject);
  //       res.render("index", hbsObject); 

  //   });
  // });



  app.post("/api/classes/search", function(req, res) {
    console.log(Object.values(req.params))
    idParams = Object.values(req.params)
    var filters = {};

    if(req.body.rating!=undefined){
      filters.rating= req.body.rating
    }
    if(req.body.location!=undefined){
      filters.location= req.body.location
    }
    console.log(filters)
    db.Class.findAll({
      where: {danceID: req.body.danceID
      },
      include: 
        [{model: db.Instructor, as: "Instructor", where: filters}],
    }).then(function(results) {
      res.json(results);

    });
  });

  app.post("/api/classes/instructorIDSearch", function(req, res) {
    db.Class.findAll({
      where: {instructorID: req.body.instructorID
      },
      include: 
        [{model: db.Instructor, as: "Instructor"}],
    }).then(function(results) {
      res.json(results);

    });
  });


  app.post("/api/classes", function(req, res) {
    db.Class.create({
      classTitle: req.body.classTitle,
      danceID: req.body.danceID,
      instructorID: req.body.instructorID
    }).then(function(results) {
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
