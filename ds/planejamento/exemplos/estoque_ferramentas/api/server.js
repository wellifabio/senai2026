const express = require('express');
const cors = require('cors');

const router = require('./src/router');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});