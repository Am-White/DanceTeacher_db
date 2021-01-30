const db = require("../models");
const router = require("express").Router();
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const session = require('express-session');

module.exports = function (app) {
  app.post("/api/register", (req, res) => {
    db.User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      fullName: req.body.fullName,
    })
      .then((data) => {
        res.render("login", data);
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  //Route for login
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.redirect('/index')
  });

  // Route for logging user out
  app.post("/logout", (req, res) => {
    req.logout();
    req.session.destroy();
    res.redirect("/");
  })

  //Routes for user data
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        username: req.user.username,
        id: req.user.id,
      });
    }
  });
}
