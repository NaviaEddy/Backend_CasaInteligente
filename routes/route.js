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

module.exports = router;
