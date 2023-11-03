const express = require("express");
const app = express();
const router = require("./app/router");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.text());                            // para que Express procese texto si la request llega en formato texto.
app.use(express.json());                            // para que Express procese json si la request llega en formato json.
app.use(express.urlencoded({extended: false}));     // form-encode

app.use("/", router);

app.use((req, res) => {
    res.status(404).send("Web no encontrada");
})

app.listen(PORT, () => console.log("Servidor escuchando por puerto " + PORT))