const express = require("express");
const app = express();
const router = require("./app/router");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

app.use(cors());         // Permite la entrada desde otro dominio diferente al del propio servidor.                         
app.use(express.json());
app.use("/api", router);

app.use((req, res) => {
    res.status(404).send("Web no encontrada");
})

app.listen(PORT, () => console.log("Servidor escuchando por puerto", PORT))
