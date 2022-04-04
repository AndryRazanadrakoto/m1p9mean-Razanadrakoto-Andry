const mongoose = require("mongoose");

const CommandeSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  date: {
    type: date
  },
  livreur: {
    type: String
  },
  detailCommande: []
});

const Commande = mongoose.model("Commande", CommandeSchema);

module.exports = Commande;