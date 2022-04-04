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
    type: String 
  },
  token: { 
    type: String 
  },
  role: {
    type: String
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;