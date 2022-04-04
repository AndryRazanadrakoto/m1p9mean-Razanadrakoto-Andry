var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

var UserController = require('./controller/User');
app.use('/', UserController);

var ProduitController = require('./controller/Produit');
app.use('/produit', ProduitController);

var EmailController = require('./controller/Email');
app.use('/email', EmailController);
module.exports = app;