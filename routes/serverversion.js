const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/', function(req, res, next) {
    res.jsonp({ serverversion: '0.0.3'  })
});


module.exports = router;
// add router in the Express app.
app.use("/", router);