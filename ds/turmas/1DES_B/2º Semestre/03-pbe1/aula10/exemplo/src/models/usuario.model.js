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

module.exports = {
    cadastrar
};