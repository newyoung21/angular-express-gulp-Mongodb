var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var fs = require('fs')
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
mongoose.Promise = global.Promise;
//todo为数据库
mongoose.connect("mongodb://127.0.0.1:27017/todo");


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use('/api', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  console.log(err.status);
  res.status(err.status || 500);
  res.send(err.status || 500, {
    message: err.message,
    error: err
  });
});


module.exports = app;
