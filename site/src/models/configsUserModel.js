var database = require('../database/config');

function editar(nick, senha, id, img){
    var instrucao = `
        UPDATE usuarios SET nick = '${nick}', senha = '${senha}', imagemPerfil = '${img}' where idUsuario = ${id};
    `;
    return database.executar(instrucao);
}

function deletar(id){
    var instrucao = `
        DELETE FROM usuarios WHERE idUsuario = ${id};
    `;
    return database.executar(instrucao);
}

module.exports = { editar, deletar };