const db = require("../models");
const router = require("express").Router();
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const session = require('express-session');
const bcrypt = require("bcryptjs");

// Route for signup
router.post("/api/register", (req, res) => {
  // req.body.isInstructor=true
  db.User.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    fullName: req.body.fullName,
    isInstructor: req.body.isInstructor
  })
    .then((data) => {
      res.render("index", data);
    })
    .catch(err => {
      res.status(401).json(err);
    });
});

  //Route for login
  router.post("/api/login", passport.authenticate("local"), async (req, res) => {
      res.redirect('/index')
    
  });

// Route for logging user out
router.post("/logout", (req, res) => {
  req.logout();
  req.user.session.destroy();
  res.redirect("/");
})

//Routes for user data
router.get("/api/user_data", (req, res) => {
  if (!req.user) {
    res.json({});
  } else {
    res.json({
      username: req.user.username,
      id: req.user.id,
      isInstructor: req.user.isInstructor
    });
  }
});

module.exports = router;