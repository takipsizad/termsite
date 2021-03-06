var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
require('dotenv').config()
var Langdetecter = require('./routes/langdetect');
var st = require('./routes/st');
var useragent = require('./routes/useragent')
var svversion = require('./routes/serverversion');
var randommessage = require('./routes/randommessage');
var docs = require('./routes/docs');
var serverinfo = require('./routes/serverinfo');
var funding = require('./routes/funding');
var dblwebhook = require('./routes/dblwebhook');
var download = require('./routes/download');
var favicon = require('./routes/favicon');
var status = require('./routes/status')
var RateLimit = require('express-rate-limit');
const slowDown = require("express-slow-down");
var discordinv = require('./routes/discordinv');
var limiter = new RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minute
  max: 200
});
const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000, // 15 minutes
  delayAfter:50 ,
  delayMs: 500
});

var port =  '3000'

var app = express();
app.use(limiter);
app.use(speedLimiter);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/api/langdetect', Langdetecter);
app.use('/docs', docs)
app.use('/api/st', st);
app.use('/api/ua', useragent);
app.use('/api/serverversion', svversion);
app.use('/api/randommessage', randommessage);
app.use('/serverinfo', serverinfo);
app.use('/funding', funding);
app.use('/api/dblwebhook', dblwebhook);
app.use('/favicon.ico', favicon)
app.use('/download', download);
app.use('/status', status);
app.use('/api/discordinv', discordinv)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',{title:'error'})
});
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})

module.exports = app;
