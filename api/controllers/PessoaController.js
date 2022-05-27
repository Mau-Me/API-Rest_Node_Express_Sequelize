const database = require("../models");
const Pessoa = require("../models/pessoas");

class PessoaController {
  static async listarPessoas(req, res) {
    try {
      const pessoas = await database.Pessoas.findAll();
      return res.json(pessoas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const pessoa = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.json(pessoa);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async inserirPessoa(req, res) {
    const { pessoa } = req.body;
    try {
      const pessoaCriada = await database.Pessoas.create(pessoa);
      return res.json(pessoaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;
