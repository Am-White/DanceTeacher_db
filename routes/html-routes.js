//Pathing
var path = require("path");
var db = require("../models");
const session = require('express-session');
var exphbs = require("express-handlebars");


module.exports = function(app) {

  const requireLogin = (req, res, next) => {
    if (!req.user) {
      return res.redirect('/login')
    }
    next();
  }

  app.get("/", function(req, res) {
          res.redirect("/index");
  });

  app.get('/index', requireLogin, function (req,res) {
    res.render('index2');
  })

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
        res.render("index", hbsObject); 

    });
  });

  app.get("/classes/:danceId/:instructorID", function(req,res) {
    idParams = Object.values(req.params)
    db.Class.findOne({
      include: 
        [{model: db.Dance, as: "Dance"} , {model: db.Instructor, as: "Instructor"}],
      where: {
        danceID: idParams[0],
        instructorID: idParams[1]
      }
    }).then(function(results) {
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
        res.render("dances", hbsObject); 

    });
  });

  app.get("/instructor/:id", function(req, res) {
    db.Instructor.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(results) {
      console.log(results.dataValues);
      res.render("update_instr", results.dataValues);
    });
  });

  app.get("/instructors", function(req, res) {
    var instArray = [];
    db.Instructor.findAll({
    }).then(function(results) {
        results.forEach(element =>
          instArray.push(element.dataValues));
        console.log(instArray)
        var hbsObject = {
            instructors: instArray
          };
        console.log(hbsObject);
        res.render("instructors", hbsObject); 

    });
  });


  app.get("/notfound", function(req,res) {
    res.render("404");
  });

  app.get("/add", function(req, res) {
    var danceArray = [];
    var instrArray = [];
    db.Dance.findAll({
    }).then(function(results) {
        results.forEach(element =>
          danceArray.push(element.dataValues));
        db.Instructor.findAll({
        }).then(function(data) {
          data.forEach(element =>
            instrArray.push(element.dataValues));
          var hbsObject = {
            dances: danceArray,
            instructors: instrArray
          }
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
        db.Instructor.findAll({
        }).then(function(data) {
          data.forEach(element =>
            instrArray.push(element.dataValues));
          var hbsObject = {
            dances: danceArray,
            instructors: instrArray
          }
          res.render("search2", hbsObject);
        })
    });
  });

  app.get("/index", function(req, res) {
    var isInstructor = req.session.passport.user.dataValues.isInstructor;
    var hbsObject = {
      isInstructor: req.session.passport.user.dataValues.isInstructor,
      isInstructor: true
    }
    res.render("index", hbsObject);
  });

  app.get("/us", requireLogin, function(req, res) {
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

    app.get("/logout", function(req, res) {
      res.render("login");
    }); 
};

