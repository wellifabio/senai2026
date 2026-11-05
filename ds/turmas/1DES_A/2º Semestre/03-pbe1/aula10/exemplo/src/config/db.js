const mysql = require("mysql2/promise");

const con = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "gestao_residuos"
});

module.exports = con;