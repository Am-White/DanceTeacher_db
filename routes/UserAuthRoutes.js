const db = require("../models");
const router = require("express").Router();
const passport = require("../config/passport");

router.post("/api/login", passport.authenticate("local"), (req, res) => {
  res.json({
    username: req.user.username,
    id: req.user.id
  });
});

router.post("/api/register", (req, res) => {
  console.log(req.body)
  db.Users.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    fullName: req.body.fullName
  })
    .then((data) => {
      res.json(data)
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