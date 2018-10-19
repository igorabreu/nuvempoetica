var appRouter = function(app) {
  app.options("*", function(req, res) {
    res.send(200);
  });
  app.post("/", function(req, res) {
    res.status(200);
    console.log(req);
  });
};

module.exports = appRouter;
