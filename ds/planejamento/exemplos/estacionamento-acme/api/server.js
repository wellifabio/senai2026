require('dotenv').config();
const express = require('express');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const estadiaRoutes = require('./src/routes/estadia.routes');
app.use('/estadia', estadiaRoutes);

const automovelRoutes = require('./src/routes/automovel.routes');
app.use('/automovel', automovelRoutes);
app.use('/', (req, res)=>{
    res.json("API do Estacionamento ACME");   
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
