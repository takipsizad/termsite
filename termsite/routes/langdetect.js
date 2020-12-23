var express = require('express');
var router = express.Router();
const detectLang = require("@haileybot/language-detector");

router.get('/', function(req, res, next) {
  res.send(detectLang(req.query.text));
});

module.exports = router;
