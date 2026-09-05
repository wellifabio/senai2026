require('dotenv').config();
const express = require('express');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const itemRoutes = require('./src/routes/item.routes');
app.use('/item', itemRoutes);
const pedidoRoutes = require('./src/routes/pedido.routes');
app.use('/pedido', pedidoRoutes);
const produtoRoutes = require('./src/routes/produto.routes');
app.use('/produto', produtoRoutes);
app.use('/', (req, res) => {
  res.json("API pedidos resondendo");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor http://localhost:${PORT}`);
  console.log(`Servidor http://localhost:${PORT}/pedido/listar`);
});
