const express = require("express");
const produitModel = require("../model/Produit");
const app = express();
const auth = require("../middleware/auth");
app.post("/add",auth('ekaly','admin'), async (request, response) => {
    const produit = new produitModel(request.body);
  
    try {
      await produit.save();
      response.send(produit);
    } catch (error) {
      response.status(500).send(error);
    }
});
app.get("/",auth(['ekaly','admin']), async (request, response) => {
    const produits = await produitModel.find({});
    try {
      response.send(produits);
    } catch (error) {
      response.status(500).send(error);
    }
});
app.post("/update",auth, async (request, response) => {
    const produits = await produitModel.find({});
    try {
      response.send(produits);
    } catch (error) {
      response.status(500).send(error);
    }
  });
module.exports = app;
  