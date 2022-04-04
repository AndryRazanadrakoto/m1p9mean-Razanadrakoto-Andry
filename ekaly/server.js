const express = require("express");
const mongoose = require("mongoose");
var Router = require('./app');

require("dotenv").config();
const app = express();

app.use(express.json());
mongoose.connect('mongodb+srv://andry:andry@cluster0.mfy0y.mongodb.net/Ekaly?retryWrites=true&w=majority',
  {
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
  const all_routes = require('express-list-endpoints');
});