const express = require("express");
const router = express.Router();
const {gestionarGET, mostrarPeliculas, gestionarPOST, gestionarDELETE} = require("./controller");

router.get("/", gestionarGET);
router.get("/movies", mostrarPeliculas);
router.post("/movies", gestionarPOST);  // gestionado con parámetros query
router.delete("/movies/:titulo", gestionarDELETE)   // gestionado con parámetros de ruta

module.exports = router