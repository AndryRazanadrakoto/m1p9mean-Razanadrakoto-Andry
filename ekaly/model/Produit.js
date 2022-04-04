const mongoose = require("mongoose");

const produitSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    nom: {
        type: String
    },
    categorie: {
        type: String
    },
    prixVente: {
        type: real,
        default: 0
    }
});

const Produit = mongoose.model("Produit", produitSchema);

module.exports = Produit;