const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema(
  {
    nome: {
      type: String,
      required: false
    },
    cpf: {
      type: String,
      required: false
    },
    senha: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true,
  }
);

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
