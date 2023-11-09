const path = require("path");
const {pool} = require("./db")

// esta función correspondería a la Vista (VIEW)
async function mostrarPeliculas(req, res) {

    const datosRecibidos = await pool.query("SELECT * FROM movies");
    console.log("Datos recibidos: ", datosRecibidos[0])
    const arrayObjetosRecibidos = datosRecibidos[0];
    res.json(arrayObjetosRecibidos);    
}

async function mostrarPelicula(req, res) {
    let texto = "";

    const {id} = req.params;
    console.log('id :>> ', id);
    const [result] = await pool.query("SELECT * FROM movies WHERE id = (?)", [id]);  
    // console.log('datoRecibido :>> ', datoRecibido);  
    const pelicula = result[0];
    res.json(pelicula);    
}

async function gestionarPOST(req, res) {
    
    const titulo = req.query.titulo;
    const director = req.query.director;
    const anio = req.query.anio;    

    await pool.query("INSERT INTO movies VALUES (?, ?, ?)", [titulo, director, anio]);
    const peliculaAniadida = await pool.query("SELECT * FROM movies WHERE titulo = (?)", [titulo]);
    console.log('peliculaAniadida :>> ', peliculaAniadida);
    res.status(201).json(peliculaAniadida);

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
    mostrarPelicula,
    gestionarPOST,
    gestionarDELETE
}