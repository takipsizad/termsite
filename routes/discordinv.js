const discordInv = require("discord-inv");
var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  var inviteurl = req.query.inviteurl
  discordInv.getInv(discordInv.getCodeFromUrl(inviteurl)).then(invite => {
  res.jsonp({invite});
});
});
  
  module.exports = router;