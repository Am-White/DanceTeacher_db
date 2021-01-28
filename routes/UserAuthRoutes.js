const db = require("../models");
const router = require("express").Router();
const passport = require("../config/passport");
const sequelize = require("sequelize");


router.post("/login", passport.authenticate("local"), (req, res) => {
  res.redirect('/')
});

router.post("/api/register", (req, res) => {
  console.log(req.body)
  db.User.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    fullName: req.body.fullName
  })
    .then((data) => {
      res.redirect(307,"/login");
    })
    .catch(err => {
      res.status(401).json(err);
    });
});

// Route for logging user out
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/api/user_data", (req, res) => {
  if (!req.user) {
    res.json({});
  } else {
    res.json({
      username: req.user.username,
      id: req.user.id
    });
  }
});

module.exports = router;