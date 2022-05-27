const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router.get("/pessoas", PessoaController.listarPessoas);
router.get("/pessoas/:id", PessoaController.buscarPessoaPorId);
router.post("/pessoas", PessoaController.inserirPessoa);
router.put("/pessoas/:id", PessoaController.atualizarPessoa);
router.delete("/pessoas/:id", PessoaController.apagarPessoa);
router.get(
  "/pessoas/:estudanteId/matricula",
  PessoaController.buscarMatriculasPorId
);
router.post(
  "/pessoas/:estudanteId/matricula",
  PessoaController.inserirMatricula
);
router.put(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.atualizarMatricula
);
router.delete(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.apagarMatricula
);

module.exports = router;
