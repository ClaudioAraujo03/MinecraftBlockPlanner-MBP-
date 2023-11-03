var database = require("../database/config");

function cadastrar(nome, email, senha, nick, dtNasc){
    var instrucao = `
        insert into usuarios (nome, email, senha, nick, dtNasc) values ('${nome}', '${email}', '${senha}', '${nick}', '${dtNasc}');
    `;
    return database.executar(instrucao);
}

function autenticar(email, senha){
    var instrucao = `
        select * from usuarios where email = '${email}' and senha = '${senha}';
    `;
    return database.executar(instrucao);
}
module.exports = { cadastrar, autenticar }