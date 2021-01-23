
var path = require("path");


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
    res.render("search");
  });

  app.get("/details", function(req,res) {
    res.render("details");
  });

  app.get("/notfound", function(req,res) {
    res.render("404");
  });

  app.get("/add", function(req,res) {
    res.render("add");
  });

  app.get("/index", function(req, res) {
    res.render("index2");
  });

  app.get("/us", function(req, res) {
    res.render("us");
  });

};
