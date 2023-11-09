const express = require("express");
const router = express.Router();
const {mostrarPeliculas, mostrarPelicula, gestionarPOST, gestionarDELETE} = require("./controller");

// router.get("/", gestionarGET);
router.get("/movies", mostrarPeliculas);
router.get("/movies/:id", mostrarPelicula);
router.post("/movies", gestionarPOST);  // gestionado con parámetros query
router.delete("/movies/:titulo", gestionarDELETE)   // gestionado con parámetros de ruta

module.exports = router // para poder importarlo en el index.js