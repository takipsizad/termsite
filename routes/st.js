var express = require('express');
var router = express.Router();
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
router.get('/', function(req, res, next) {
  res.jsonp({ st: today })
});

module.exports = router;