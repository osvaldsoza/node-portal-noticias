const mysql = require("mysql");

const connMySql = () => {
  console.log("Conexao aberta");
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "osf77",
    database: "portal_noticias",
  });
};
module.exports = () => {
  console.log("Autoload carregou a conexao");
  return connMySql;
};
