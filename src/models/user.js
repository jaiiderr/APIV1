const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  perfil: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true

  },
  lema: {
    type: String,
    required: true

  }
});

module.exports = mongoose.model('User', userSchema);