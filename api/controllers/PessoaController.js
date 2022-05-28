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

  static async buscarPessoaPorId(req, res) {
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

    try {
      await database.Pessoas.destroy({ where: { id: Number(id) } });
      res.status(204).end();
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async restaurarPessoa(req, res) {
    const { id } = req.params;

    try {
      await database.Pessoas.retore({ where: { id: Number(id) } });
      res.statu(204).end();
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async buscarMatriculasPorId(req, res) {
    try {
      const { estudanteId } = req.params;
      const { matriculaId } = req.params;
      const matricula = await database.Matriculas.findAll({
        where: {
          estudante_id: Number(estudanteId),
        },
      });
      return res.json(matricula);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async inserirMatricula(req, res) {
    const { estudanteId } = req.params;
    const novaMatricula = { estudante_id: Number(estudanteId), ...req.body };
    try {
      const matriculaCriada = await database.Matriculas.create(novaMatricula);
      return res.json(matriculaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizarMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    const matricula = req.body;

    try {
      await database.Matriculas.update(matricula, {
        where: { id: Number(matriculaId), estudante_id: Number(estudanteId) },
      });
      const matriculaAtualizada = await database.Matriculas.findOne({
        where: { id: Number(matriculaId) },
      });
      return res.json(matriculaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async apagarMatricula(req, res) {
    const { matriculaId } = req.params;

    try {
      await database.Matriculas.destroy({ where: { id: Number(matriculaId) } });
      res.status(204).end();
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async restaurarMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    try {
      await database.Matriculas.restore({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId),
        },
      });
      return res.status(204).end();
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;
