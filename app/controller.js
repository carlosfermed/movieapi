const {pool} = require("./db")

async function mostrarPeliculas(req, res) {
    try {
        const datosRecibidos = await pool.query("SELECT * FROM movies");
        const arrayObjetosRecibidos = datosRecibidos[0];
        res.json(arrayObjetosRecibidos);  
    } catch (error) {
        console.log('ERROR al mostrar Peliculas :>> ', error);
    }     

}

async function mostrarPelicula(req, res) {
    const {id} = req.params;

    try {
        const [result] = await pool.query("SELECT * FROM movies WHERE id = ?", [id]);
        const pelicula = result[0];
        console.log(pelicula);
        if (pelicula === undefined) {
            return res.status(404).json({message: "idIncorrecto"});
        }
        res.json(pelicula); 
    } catch (error) {
        console.log('ERROR al mostrar la Pelicula :>> ', error);
    }      

}

async function gestionarPOST(req, res) {    
    const {titulo, director, anio} = req.body;  
    try {
        await pool.query("INSERT INTO movies(`id`, `titulo`, `director`, `anio`) VALUES (NULL, ?, ?, ?)", [titulo, director, anio]);
        const [peliculaAniadida] = await pool.query("SELECT * FROM movies WHERE titulo = (?)", [titulo]);
        res.status(201).json(peliculaAniadida[0]);
    } catch (error) {
        console.log('ERROR al gestionar POST :>> ', error);        
    }    

}

async function gestionarDELETE(req, res) {
    const {titulo} = req.params;

    try {
        const peliculaBorrada = await pool.query("DELETE FROM movies WHERE titulo = ?", [titulo]);
        if (peliculaBorrada[0].affectedRows) 
            res.status(200).send(`La película ${titulo} ha sido eliminada`)
        else       
            res.status(404).send("No se encontró la película");
    } catch (error) {
        console.log('ERROR al BORRAR :>> ', error);             
    }
    
}

module.exports = {
    mostrarPeliculas,
    mostrarPelicula,
    gestionarPOST,
    gestionarPATCH,
    gestionarDELETE
}
