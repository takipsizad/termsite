var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json())
router.use(express.json());
require('dotenv').config();
const webhook = process.env.webhook
const { Webhook } = require('discord-webhook-node');
const hook = new Webhook(webhook);

router.get('/', function(req, res) {
    res.send('working')
})
router.post('/', function(req, res) {
	res.send('xd')
	hook.send("thanks for voting us on top gg",'<@',req.body.user,'>');
})

module.exports = router;