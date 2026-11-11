const prisma = require("../data/prisma");

async function criarUsuario(req, res) {
    const usuario = await prisma.usuario.create({
        data: req.body
    });
    res.status(201).json(usuario);
}

async function login(req, res) {
    const { email, senha } = req.body;
    const usuario = await prisma.usuario.findFirst({
        where: { email, senha }
    });
    if (usuario) {
        delete usuario.senha;
        res.json({ message: 'Login successful', usuario });
    } else {
        res.status(401).json({ message: 'Email ou senha inválidos' });
    }
}

async function listarUsuarios(req, res) {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
}

module.exports = {
    criarUsuario,
    login,
    listarUsuarios
};