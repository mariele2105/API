const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "Nome da tarefa é obrigatório"],
    trim: true
  },
  concluida: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Tarefa", schema);