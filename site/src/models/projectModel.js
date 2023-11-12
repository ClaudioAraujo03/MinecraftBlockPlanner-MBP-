var database = require('../database/config');

function abrirProjetoModel(idProjeto){
    var instrucao = `
        select *  from projeto where idProjeto = ${idProjeto}
    `;
    return database.executar(instrucao)
}

module.exports = { abrirProjetoModel };