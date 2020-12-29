var express = require('express');
var router = express.Router();
const {getStatus}  = require("mc-server-status")


router.get('/', function(req, res, next) {
  res.jsonp({ status: getStatus(req.query.ip) })
});

module.exports = router;
