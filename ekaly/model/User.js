const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: { 
    type: String,
    unique: true
  },
  password: { 
    type: String,
    required: true
  },
  token: { 
    type: String 
  },
  role: {
    type: String,
    default: 'basic',
    enum: ["client", "ekaly","restaurant", "admin","livreur"]
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;