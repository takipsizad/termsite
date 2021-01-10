var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(express.json());
require('dotenv').config()
router.get('/', function(req, res) {
    res.send('working')
})
router.post('/', function(req, res, next) {
    if (req.headers.authorization == process.env.secret) {
    const hook = new Webhook(process.env.webhook); 
    const embed = new MessageBuilder()
    .setTitle('<@',req.body.user,'>')
    .addField('this user voted thanks')
    .setColor('#00b0f4')
    .setTimestamp();
    hook.send(embed);;
        }

});

module.exports = router;