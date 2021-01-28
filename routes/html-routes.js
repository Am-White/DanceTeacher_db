//Pathing
var path = require("path");
var db = require("../models");


module.exports = function(app) {

  // Each of the below routes just handles the HTML view that the user gets sent to.

  // index route loads index.handlebars
  app.get("/", function(req, res) {
    res.render(path.join(__dirname, "../views/index.handlebars"));
  });

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


  // app.post("/register", async (req, res) => {
  //   try {
  //     const hashedPassword = await bcrypt.hash(req.body.password, 10)
  //   users.push({
  //       id: Date.now().toString(),
  //       username: req.body.username,
  //       password: hashedPassword,
  //       email: req.body.email,
  //       fullnName: req.body.fullName
  //     })
  //     res.redirect('/login')
  //   } catch {
  //     res.redirect('/register')
  //   }
  //   console.log(users)
  // });

  app.get("/login", function(req, res) {
    if (req.user) {
      res.redirect("/index");
  }
      res.render("login");
  });

    app.get("/register", function(req, res) {
      res.render("register");
    });   
};

