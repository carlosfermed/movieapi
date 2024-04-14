const express = require("express");
const router = express.Router();
const {mostrarPeliculas, mostrarPelicula, gestionarPOST, gestionarDELETE} = require("./controller");

router.get("/movies", mostrarPeliculas);
router.get("/movies/:id", mostrarPelicula);
router.post("/movies", gestionarPOST); 
router.delete("/movies/:titulo", gestionarDELETE);

module.exports = router 