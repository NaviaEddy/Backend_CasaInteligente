const express = require("express");
const router = express.Router();
const CasaController = require("../controllers/CasaController");

router.post("/open_window", CasaController.AbrirVentana);
router.post("/close_window", CasaController.CerrarVentana);
router.post("/open_door", CasaController.AbrirPuerta);
router.post("/close_door", CasaController.CerrarPuerta);
router.post("/open_garage", CasaController.AbrirGaraje);
router.post("/close_garage", CasaController.CerrarGaraje);
router.post("/open_lock", CasaController.AbrirTranca);
router.post("/close_lock", CasaController.CerrarTranca);
router.post("/on_bedroom1", CasaController.EncenderDormitorio1);
router.post("/off_bedroom1", CasaController.ApagarDormitorio1);
router.post("/on_bedroom2", CasaController.EncenderDormitorio2);
router.post("/off_bedroom2", CasaController.ApagarDormitorio2);
router.post("/on_livingroom", CasaController.EncenderSala);
router.post("/off_livingroom", CasaController.ApagarSala);

module.exports = router;
