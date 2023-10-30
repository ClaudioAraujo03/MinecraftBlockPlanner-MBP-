var database = require("../database/config");

function cadastrar(nome, email, senha, nick, dtNasc){
    var instrucao = `
        insert into usuarios (nome, email, senha, nick, dtNasc) values ('${nome}', '${email}', '${senha}', '${nick}', '${dtNasc}');
    `;
    return database.executar(instrucao);
}
module.exports = { cadastrar }