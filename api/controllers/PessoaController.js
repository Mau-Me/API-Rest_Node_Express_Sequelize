const database = require("../models");

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
    const pessoa = req.body;
    try {
      const pessoaCriada = await database.Pessoas.create(pessoa);
      return res.json(pessoaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizarPessoa(req, res) {
    const { id } = req.params;
    const pessoa = req.body;

    try {
      await database.Pessoas.update(pessoa, { where: { id: Number(id) } });
      const pessoaAtualizada = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.json(pessoaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async apagarPessoa(req, res) {
    const { id } = req.params;

    console.log({ id });

    try {
      await database.Pessoas.destroy({ where: { id: Number(id) } });
      res.status(204).end();
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;
