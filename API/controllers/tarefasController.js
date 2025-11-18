const Tarefa = require("../models/tarefaModel");

const listar = async (req, res) => {
  const tarefas = await Tarefa.find();
  return res.json(tarefas);
};

const obter = async (req, res) => {
  const tarefa = await Tarefa.findById(req.params.id);
  if (!tarefa) {
    return res.status(404).json({ msg: "Tarefa não encontrada" });
  }
  return res.json(tarefa);
};

const criar = async (req, res) => {
  try {
    const tarefa = await Tarefa.create(req.body);
    return res.status(201).json(tarefa);
  } catch (err) {
    return res.status(400).json({ msg: err.message });
  }
};

const atualizar = async (req, res) => {
  const tarefa = await Tarefa.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!tarefa) {
    return res.status(404).json({ msg: "Tarefa não encontrada" });
  }

  return res.json(tarefa);
};

const remover = async (req, res) => {
  const tarefa = await Tarefa.findByIdAndDelete(req.params.id);

  if (!tarefa) {
    return res.status(404).json({ msg: "Tarefa não encontrada" });
  }

  return res.status(204).send();
};

module.exports = { listar, obter, criar, atualizar, remover };