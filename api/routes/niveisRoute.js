const { Router } = require("express");
const NivelController = require("../controllers/NivelController");

const router = Router();
router
  .get("/niveis", NivelController.listarNiveis)
  .get("/niveis/:id", NivelController.buscarNivelPorId)
  .post("/niveis", NivelController.inserirNivel)
  .put("/niveis/:id", NivelController.atualizarNivel)
  .delete("/niveis/:id", NivelController.apagarNivel)
  .post("/niveis/:id/restaura", NivelController.restauraNivel);
module.exports = router;
