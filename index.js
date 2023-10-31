const express = require("express");
const cors = require("cors");
const router = require("./app/router");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/", router);

app.use((req, res) => {
    res.status(404).send("Web no encontrada");
})

app.listen(PORT, () => console.log("Servidor escuchando por puerto " + PORT))