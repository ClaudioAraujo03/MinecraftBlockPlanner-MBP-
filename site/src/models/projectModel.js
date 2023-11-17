var database = require('../database/config');

function abrirProjetoModel(idProjeto){
    var instrucao = `
        select *  from projeto 
        join areaProj on idProjeto = fkProjeto 
        join blocos as materiaPrincipal on fkBloco = idBloco where fkProjeto = ${idProjeto}    
    `;
    return database.executar(instrucao)
}

function achaBlocosModel(){
    var instrucao = `
        select * from blocos
    `;
    return database.executar(instrucao)
};

module.exports = { abrirProjetoModel, achaBlocosModel };