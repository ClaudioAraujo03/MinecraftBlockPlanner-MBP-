var database = require('../database/config');

function editar(nick, senha, id){
    console.log("ACESSEI O ConfigsUser MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ");
    var instrucao = `
        UPDATE usuarios SET nick = '${nick}', senha = '${senha}' where idUsuario = ${id};
    `;
    return database.executar(instrucao);
}

module.exports = { editar }