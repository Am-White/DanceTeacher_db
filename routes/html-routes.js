
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

  //Amethyst Search handlebars
  app.get("/search", function(req, res) {
    res.render("search");
  });


};
