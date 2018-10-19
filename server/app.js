const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const server = require("http").Server(app);
const port = 3000;
const helmet = require("helmet");

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Accept"
  );
  next();
});

//pre-flight requests
app.options("*", function(req, res) {
  res.send(200);
});

server.listen(port, err => {
  if (err) {
    throw err;
  }
  console.log("Node Endpoints working :)");
});

app.get("/", (err, res) => {
  res.status(200);
  res.json({ working: true });
  res.end();
});

app.post("/", (req, res) => {
  res.status(200);
  console.log(req.body);
  res.send(res.body);
  res.end();
});

module.exports = { server };