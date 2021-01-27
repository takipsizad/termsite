var express = require('express');
var router = express.Router();
const path = require('path');
const os = require('os');
const bytes = require('bytes');
/* GET home page. */
router.get('/', function(req, res) {
  var freemem = os.freemem()
  var platform = os.platform()
  var release = os.release()
  var totalmem = os.totalmem()
  var uptime = os.uptime()
var totalmemby = bytes(totalmem)
var freememby = bytes(freemem)
var hours = Math.floor(uptime / 60 / 60);

var minutes = Math.floor(uptime / 60) - (hours * 60);


var seconds = uptime % 60
var formatted = hours + ':' + minutes + ':' + seconds;
  res.render( path.resolve('./views/status.ejs'), {uptime: formatted, freemem: freememby, platform: platform, totalmem: totalmemby, release: release} );
});
module.exports = router;