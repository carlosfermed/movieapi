const path = require("path");
const {pool} = require("./db")

// esta función correspondería a la Vista (VIEW)
async function mostrarPeliculas(req, res) {
    let texto = "";

    const datosRecibidos = await pool.query("SELECT * FROM movies");
    console.log("Datos recibidos: ", datosRecibidos[0])
    const arrayObjetosRecibidos = datosRecibidos[0];
    for (const item of arrayObjetosRecibidos) {
        // console.log("item ", item);
        texto += item.titulo + " / ";
    }
    res.json(arrayObjetosRecibidos)
    
}

function gestionarPOST(req, res) {

    const nuevaPelicula = {
        id: contadorID++,
        titulo: req.query.titulo,
        director: req.query.director,
        anio: req.query.anio
    }

    data.push(nuevaPelicula);
    res.status(201).json(nuevaPelicula);

}

function gestionarDELETE(req, res) {
    const {titulo} = req.params;

    const indicePeliculaEncontrada = data.findIndex(pelicula => pelicula.titulo === titulo);
    if (indicePeliculaEncontrada != -1) {
        data.splice(indicePeliculaEncontrada, 1);
        res.status(200).send(`La película ${titulo} ha sido eliminada`)
    }
    else    
        res.status(404).send("No se encontró la película");
}


module.exports = {
    mostrarPeliculas,
    gestionarPOST,
    gestionarDELETE
}