var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

console.log('test');

// here we define the variables that will contain the actual code of the route
var teams = require('./routes/api/teams');
var trips = require('./routes/api/trips');

var app = express();

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// here we define all routes of our API
app.use('/api/teams', teams);
app.use('/api/trips', trips);

console.log('we have the server running');
console.log('Another console log');

module.exports = app;
