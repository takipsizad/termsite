const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/', function(req, res, next) {
    res.jsonp({ serverversion: '0.0.5'  })
});

module.exports = router;