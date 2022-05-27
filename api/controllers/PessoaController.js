const database = require("../models");
const Pessoa = require("../models/pessoas");

class PessoaController {
  static async listarPessoas(req, res) {
    try {
      const pessoas = await database.Pessoas.findAll();
      return res.json(pessoas);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;
