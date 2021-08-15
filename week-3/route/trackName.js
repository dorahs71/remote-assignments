const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.cookie("username", req.body.username);
  res.redirect("/myName");
});

module.exports = router;
