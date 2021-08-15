const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let result;
  if (!req.query.number) {
    result = "<p>Lack of Parameters</p>";
  } else if (isNaN(req.query.number)) {
    result = "<p>Wrong Parameters</p>";
  } else {
    let answer =
      ((1 + Number(req.query.number)) * Number(req.query.number)) / 2;
    result = `<p>${answer}</p>`;
  }
  res.send(result);
});

module.exports = router;
