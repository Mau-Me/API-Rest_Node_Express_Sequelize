const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router
  .get("/pessoas", PessoaController.listarPessoas)
  .get("/pessoas/:id", PessoaController.buscarPessoaPorId)
  .post("/pessoas", PessoaController.inserirPessoa)
  .put("/pessoas/:id", PessoaController.atualizarPessoa)
  .delete("/pessoas/:id", PessoaController.apagarPessoa)
  .get(
    "/pessoas/:estudanteId/matricula",
    PessoaController.buscarMatriculasPorId
  )
  .post("/pessoas/:estudanteId/matricula", PessoaController.inserirMatricula)
  .put(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.atualizarMatricula
  )
  .delete(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.apagarMatricula
  )
  .post("/pesoas/:id/restaura", PessoaController.restaurarPessoa)
  .post(
    "/pessoas/:estudanteId/matricula/:matriculaId/restaura",
    PessoaController.restaurarMatricula
  );

module.exports = router;
