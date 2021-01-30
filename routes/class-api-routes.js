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

  app.get("/classes/:danceId/:instructorID", function(req, res) {
    console.log(Object.values(req.params))
    idParams = Object.values(req.params)
    db.Class.findOne({
      include: 
        [{model: db.Dance, as: "Dance"} , {model: db.Instructor, as: "Instructor"}],
      where: {
        danceID: idParams[0],
        instructorID: idParams[1]
      }
    }).then(function(results) {
      console.log(results.dataValues.Dance.dataValues.danceTitle);
      console.log(results.dataValues.Instructor.dataValues.name + " " + results.dataValues.Instructor.dataValues.lastName)
      var selectedDanceName = results.dataValues.Dance.dataValues.danceTitle;
      var selectedInstructorName = results.dataValues.Instructor.dataValues.name;
      var selectedInstructorLastName = results.dataValues.Instructor.dataValues.lastName;
      var selectedInstructorRating = results.dataValues.Instructor.dataValues.rating;
      var selectedInstructorLocation = results.dataValues.Instructor.dataValues.location;
      var selectedInstructorRate = results.dataValues.Instructor.dataValues.hourlyRate;
      res.render("v-details", {name: selectedDanceName, instrName:selectedInstructorName, instLastName: selectedInstructorLastName,
      rating: selectedInstructorRating, location: selectedInstructorLocation, hourlyRate: selectedInstructorRate});
    });
  });

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
