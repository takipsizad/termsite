const randomChoice = require('random-choice');
var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.jsonp({mesassage:randomChoice(['apple', 'orange', 'banana','hey wanna know this message is ultra long and empty'], [1, 1, 1,1]) })
  });
  
  module.exports = router;