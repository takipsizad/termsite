var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile( path.resolve('./views/info.html') );
});
module.exports = router;
