const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());
app.use("/", express.static("public"));

app.get("/", (req, res) => {
  res.send("<h1>Hello, My Server!</h1>");
});

app.set("view engine", "pug");

const dataRoutes = require("./route/data");
const trackRoutes = require("./route/trackName");
const myRoutes = require("./route/myName");

app.use("/getData", dataRoutes);
app.use("/trackName", trackRoutes);
app.use("/myName", myRoutes);

app.use((req, res, next) => {
  const err = new Error("Not Found!");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  console.log("Error Status: ", err.status);
  res.status(err.status || 500);
  res.render("error");
});

app.listen(3000, () => {
  console.log("The app is running on localhost:3000!");
});
