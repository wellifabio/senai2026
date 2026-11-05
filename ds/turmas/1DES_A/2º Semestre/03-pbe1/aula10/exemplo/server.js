const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

//Importar rotas
const usuarioRoutes = require("./src/routes/usuario.routes");
app.use("/usuarios", usuarioRoutes);

app.listen(3000, () => {
    console.log("Servidor online");
});