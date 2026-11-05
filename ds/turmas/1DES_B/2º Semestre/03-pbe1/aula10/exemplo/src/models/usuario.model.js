const con = require("../config/db");

const cadastrar = async ({ nome, email, senha }) => {
    const [resultado] = await con.query(
        "INSERT INTO usuario VALUES (DEFAULT, ?, ?, ?);",
        [nome, email, senha]
    );

    return {
        id: resultado.insertId,
        nome,
        email
    };
};

const listar = async () => {
    const [resultado] = await con.query(
        "SELECT id, nome, email FROM usuario;"
    );

    return resultado;
};

const buscar = async (id) => {
    const [resultado] = await con.query(
        "SELECT id, nome, email FROM usuario WHERE id = ?;",
        [id]
    );

    return resultado;
};

const excluir = async (id) => {
    const [resultado] = await con.query(
        "DELETE FROM usuario WHERE id = ?;",
        [id]
    );

    return resultado;
};

const atualizar = async (dados, id) => {
    const [resultado] = await con.query(
        "UPDATE usuario SET ? WHERE id = ?;",
        [dados, id]
    );

    return resultado;
};

module.exports = {
    cadastrar, 
    listar,
    buscar,
    excluir,
    atualizar
};