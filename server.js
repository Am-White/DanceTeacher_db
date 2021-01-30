// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================

require("dotenv").config();
var session = require("express-session");
var express = require("express");
var exphbs = require("express-handlebars");
var passport = require("./config/passport");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
// Requiring our models for syncing
var db = require("./models");
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
// For Passport
app.use(
	session({
		secret: "keyboard cat",
		resave: true,
		saveUninitialized: true
	})
); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
// Handlebars
app.use(express.static("views"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/userAuthRoutes.js")(app);
require("./routes/userRoute.js")(app);
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
