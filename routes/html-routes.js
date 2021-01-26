
var path = require("path");
var db = require("../models");


module.exports = function(app) {

  // Each of the below routes just handles the HTML view that the user gets sent to.

  // index route loads index.handlebars
  app.get("/", function(req, res) {
    res.render(path.join(__dirname, "../views/index.handlebars"));
  });

  // app.get("/cms", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/cms.html"));
  // });

  // app.get("/blog", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/blog.html"));
  // });

  // app.get("/authors", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  // });


  //Amethyst's temporary Search handlebars
  app.get("/search", function(req, res) {
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

  app.get("/classes/:danceId/:instructorID", function(req,res) {
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
    // res.render("details");
  // });

  app.get("/notfound", function(req,res) {
    res.render("404");
  });

/* New Class (Class name, type, teacher) */
  app.get("/add", function(req, res) {
    var danceArray = [];
    var instrArray = [];
    db.Dance.findAll({
    }).then(function(results) {
        results.forEach(element =>
          danceArray.push(element.dataValues));
        console.log(danceArray)
        db.Instructor.findAll({
        }).then(function(data) {
          data.forEach(element =>
            instrArray.push(element.dataValues));
          console.log(instrArray);
          var hbsObject = {
            dances: danceArray,
            instructors: instrArray
          }
          console.log(hbsObject);
          res.render("add", hbsObject);
        })
    });
  });

  /* Search Classes from drop down menu*/
  app.get("/search2", function(req, res) {
    var danceArray = [];
    var instrArray = [];
    db.Dance.findAll({
    }).then(function(results) {
        results.forEach(element =>
          danceArray.push(element.dataValues));
        console.log(danceArray)
        db.Instructor.findAll({
        }).then(function(data) {
          data.forEach(element =>
            instrArray.push(element.dataValues));
          console.log(instrArray);
          var hbsObject = {
            dances: danceArray,
            instructors: instrArray
          }
          console.log(hbsObject);
          res.render("search2", hbsObject);
        })
    });
  });

  app.get("/index", function(req, res) {
    res.render("index2");
  });

  app.get("/us", function(req, res) {
    res.render("us");
  });

  app.get("/teacher", function(req, res) {
    res.render("teacher");
  });

  app.get("/register", function(req, res) {
    res.render("register");
  });

  app.get("/login", function(req, res) {
    res.render("login");
  });

};
