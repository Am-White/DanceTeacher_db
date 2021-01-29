
const db = require("../models");
const router = require("express").Router();
const isAuthenticated = require("../config/middleware/isAuthenticated");
const users = require("../models/users");

router.get("/api/user/:id", (req, res) => {
    db.Users.findAll({ 
    where:{
        id: req.params.id 
     }
    }).then((data, err) => {
        console.log(`data = ${data}`)
        if (err) throw err
        res.json(data);
    })
});

// Form should give boolean value for instructor
router.post("/api/user", (req, res) => {
    // req.user.isInstructor=true
    db.Users.create({
        username: req.user.username,
        password: req.user.password,
        email: req.user.email,
        fullName: req.user.fullName,
        // isInstructor: req.user.isInstructor
    }).then(newUser => {
        res.json(newUser);
    });
})

module.exports = router;