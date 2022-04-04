const mongoose = require("mongoose");
const DetailCommSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  date: {
    type: date
  },
  idCommande: {
    type: String
  },
  idproduit: {
    type: String
  },
  prixVente: {
    type: real
  },
  quantite: {
    type: int
  },
  statut: {
    type: int
  },
  note: {
    type: String
  }
});

const DetailCommande = mongoose.model("DetailCommande", DetailCommSchema);

module.exports = DetailCommande;