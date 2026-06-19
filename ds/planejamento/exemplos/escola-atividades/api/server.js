require('dotenv').config();
const express = require('express');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const atividadeRoutes = require('./src/routes/atividade.routes');

app.use('/atividade', atividadeRoutes);


const turmaRoutes = require('./src/routes/turma.routes');

app.use('/turma', turmaRoutes);


const professorRoutes = require('./src/routes/professor.routes');

app.use('/professor', professorRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
