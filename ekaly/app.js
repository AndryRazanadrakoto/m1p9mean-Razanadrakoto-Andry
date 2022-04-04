var express = require('express');
var app = express();
var cors = require('cors');

// ADD THESE TWO LINES

app.use(cors());

var UserController = require('./controller/User');
app.use('/', UserController);



module.exports = app;