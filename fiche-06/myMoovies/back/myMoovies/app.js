var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var filmRouter = require("./routes/films");
var cors = require('cors');
let corsOptions = {
    origin : 'http://localhost:8080',
}
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/films', cors(corsOptions) ,filmRouter);

module.exports = app;
