const path = require("path");
const {data} = require("./movies");

function gestionarGET(req, res) {
    res.sendFile(path.resolve("index.html"));
}

    // -------> intentar enviar un html con cada una de la películas en una lista li
function mostrarPeliculas(req, res) {
    res.json(data);
}

function gestionarPOST(req, res) {

    const nuevaPelicula = {
        id: req.query.id,
        titulo: req.query.titulo,
        director: req.query.director,
        anio: req.query.anio
    }

    console.log("Objeto Película: ", nuevaPelicula);
    data.push(nuevaPelicula);
    res.status(201).send("Película añadida satisfactoriamente");

}

function gestionarDELETE(req, res) {
    const {titulo} = req.params;

    const indicePeliculaEncontrada = data.findIndex(pelicula => pelicula.titulo === titulo);
    data.splice(indicePeliculaEncontrada, 1);
    res.status(200).send(`La película ${titulo} ha sido eliminada`)
}


module.exports = {
    gestionarGET,
    mostrarPeliculas,
    gestionarPOST,
    gestionarDELETE
}