const express = require("express");
const produitModel = require("../model/Produit");
const app = express();
app.post("/listeProduit", async (request, response) => {
    const produit = new produitModel(request.body);
  
    try {
      await produit.save();
      response.send(produit);
    } catch (error) {
      response.status(500).send(error);
    }
});
app.get("/addProduit", async (request, response) => {
    const produits = await produitModel.find({});
  
    try {
      response.send(produits);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  module.exports = app;
  