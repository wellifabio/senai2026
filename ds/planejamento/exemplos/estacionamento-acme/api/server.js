require('dotenv').config();
const express = require('express');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const automovelRoutes = require('./src/routes/automovel.routes');
app.use('/automovel', automovelRoutes);
const estadiaRoutes = require('./src/routes/estadia.routes');
app.use('/estadia', estadiaRoutes);

app.use("/", (req, res) => {
  res.json({ message: "API estacionamento respondendo!" });
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor respondendo em http://localhost:${PORT}`);
});
