const express = require("express");
const router = express.Router();
const {mostrarPeliculas, mostrarPelicula, gestionarPOST, gestionarDELETE, gestionarPATCH} = require("./controller");

// router.get("/", gestionarGET);
router.get("/movies", mostrarPeliculas);
router.get("/movies/:id", mostrarPelicula);
router.post("/movies", gestionarPOST); 
router.patch("/movies/:titulo", gestionarPATCH) 
router.delete("/movies/:titulo", gestionarDELETE)  

module.exports = router // para poder ser importado en el index.js