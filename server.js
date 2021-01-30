// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
require('dotenv').config();
var express = require("express");
var exphbs = require("express-handlebars");
<<<<<<< HEAD
var passport = require('./config/passport')

=======
// eslint-disable-next-line no-unused-vars
const path = require("path");
var bodyParser = require('body-parser')
>>>>>>> parent of 8058ac1... Merge branch 'main' into ame-16
// console.log(process.env)

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

app.use(express.static(__dirname + "/public"));

// app.use(express.static(path.join(__dirname,"public")));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static('views'));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/dance-api-routes.js")(app);
require("./routes/class-api-routes.js")(app);
require("./routes/instructor-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

// { force: true }
