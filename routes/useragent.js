var express = require('express');
var router = express.Router();
var useragent = require('express-useragent');
router.use(useragent.express());
router.get('/', function(req, res, next) {
  res.jsonp({ ua: req.useragent })
});

module.exports = router;
