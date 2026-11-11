const express = require('express');
const router = express.Router();

const Usuario = require('./controllers/usuario');
const Produto = require('./controllers/produto');
const Estoque = require('./controllers/estoque');

router.get('/', (req, res) => {
    res.send('API Estoque respondendo');
});

router.post('/usuarios', Usuario.criarUsuario);
router.get('/usuarios', Usuario.listarUsuarios);
router.post('/login', Usuario.login);

router.post('/produtos', Produto.criarProduto);
router.get('/produtos', Produto.listarProdutos);
router.get('/produtos/:id', Produto.obterProduto);
router.patch('/produtos/:id', Produto.atualizarProduto);
router.delete('/produtos/:id', Produto.excluirProduto);

router.post('/estoque', Estoque.criarEstoque);
router.get('/estoque', Estoque.listarEstoques);

module.exports = router;
