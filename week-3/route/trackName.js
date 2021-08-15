const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const name = req.cookies.username;
  if (!name) {
    res.render("trackName");
  } else {
    res.redirect("/myName");
  }
});

router.post("/", (req, res) => {
  res.cookie("username", req.body.username);
  res.redirect("/myName");
});

module.exports = router;
