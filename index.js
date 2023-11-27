const express = require("express");
const app = express();
const router = require("./app/router");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

app.use(cors());                                    // Permite la entrada desde otro dominio diferente al del propio servidor.
app.use(express.text());                            // Procesa texto si la petición (request) llega en formato texto.
app.use(express.json());                            // Procesa json si la petición (request) llega en formato json.
// app.use(express.urlencoded({extended: false}));     // form-encode

app.use("/api", router);

app.use((req, res) => {
    res.status(404).send("Web no encontrada");
})

app.listen(PORT, () => console.log("Servidor escuchando por puerto", PORT))