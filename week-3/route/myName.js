const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render("myName", { name });
  } else {
    res.render("myName");
  }
});

module.exports = router;
