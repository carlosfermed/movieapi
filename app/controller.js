const path = require("path");
const {data} = require("./movies");

let contadorID = 4;


function gestionarGET(req, res) {
    res.sendFile(path.resolve("index.html"));
}

// esta función correspondería a la Vista (VIEW)
function mostrarPeliculas(req, res) {

    let texto = "";
    data.forEach(pelicula => texto += `<li>ID: ${pelicula.id} / ${pelicula.titulo} / ${pelicula.director} / ${pelicula.anio}</li>`);
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                a {
                    background-color: grey;
                    color: white;
                    margin-left: 45vw;
                    text-decoration: none;
                    border-radius: 4px;
                    padding: 10px;
                }
                li {
                    color: brown;
                    list-style-type: none;
                }
            </style>
        </head>
        <body>
            <ul>
            ${texto}
            </ul>
            <a href="http://localhost:3000">Volver</a>
        </body>
        </html>
    `);
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
    gestionarGET,
    mostrarPeliculas,
    gestionarPOST,
    gestionarDELETE
}