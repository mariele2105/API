const express = require("express");
const controller = require("../controllers/tarefaController");
const autenticar = require("../middleware/auth");
const router = express.Router();

router.get("/", controller.listar);
router.get("/:id", controller.obter);

router.post("/", autenticar, controller.criar);
router.put("/:id", autenticar, controller.atualizar);
router.delete("/:id", autenticar, controller.remover);

module.exports = router;