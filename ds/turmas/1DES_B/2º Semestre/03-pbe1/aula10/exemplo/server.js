const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/*
    importar as rotas
*/

//http://localhost:3000/usuarios/cadastrar
const usuarioroutes = require("./src/routes/usuario.routes");
app.use("/usuarios", usuarioroutes);

app.listen(3000, () => {
    console.log("Servidor Online");
});