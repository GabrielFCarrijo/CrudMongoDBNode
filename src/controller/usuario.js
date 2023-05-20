const Usuario = require('../models/usuario')
const controller = {};

controller.get = async (req, res) => {
    try {
      const usuarios = await Usuario.find();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

  controller.create = async (req, res) => {
    try {
      const usuario = await Usuario.create(req.body);
      res.status(200).json(usuario);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  };
  


controller.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, cpf, senha } = req.body;

        const usuario = await Usuario.findByIdAndUpdate(id, { nome, cpf, senha }, { new: true });

        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

controller.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findByIdAndDelete(id);

        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = controller;
