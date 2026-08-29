const express = require("express");
const pacientes = require("../dados.json");

const PORT = 3000;

const app = express();

app.use(express.urlencoded());

app.listen(PORT, () => {
    console.log(`Servidor online na porta ${PORT}`);
})