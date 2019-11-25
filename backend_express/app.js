var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var userController = require('./routes/user-controller');
var postController = require('./routes/post-controller');

const session = require("express-session")
const passport = require("passport")
require("./authentication/passport-config")

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: "secret", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', indexRouter);
app.use('/api', userController);
app.use('/api', postController);

module.exports = app;
