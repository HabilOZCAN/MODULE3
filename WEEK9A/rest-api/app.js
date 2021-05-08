var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var routerMovies = require('./routes/routerMovies');
var routerRented = require('./routes/routerRented');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/movies', routerMovies);
app.use('/rent', routerRented);

app.get('/',(res, req)=>{
    res.send(200,'CONGRAT!!!');
})

module.exports = app;
