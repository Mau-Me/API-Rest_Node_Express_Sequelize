const { Router } = require("express");
const TurmaController = require("../controllers/TurmaController");

const router = Router();
router
  .get("/turmas", TurmaController.listarTurmas)
  .get("/turmas/:id", TurmaController.buscarTurmaPorId)
  .post("/turmas", TurmaController.inserirTurma)
  .put("/turmas/:id", TurmaController.atualizarTurma)
  .delete("/turmas/:id", TurmaController.apagarTurma);
module.exports = router;
