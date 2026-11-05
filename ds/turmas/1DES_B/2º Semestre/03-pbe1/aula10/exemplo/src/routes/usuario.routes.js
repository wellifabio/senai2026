const express = require("express");
const routes = express.Router();

const { cadastrar } = require("../controllers/usuario.controller");

routes.post("/cadastrar", cadastrar);

module.exports = routes;