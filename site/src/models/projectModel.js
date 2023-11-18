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

function deletaAreaProjetosModel(idArea){
    var instrucao = `
        delete from areaProj where idArea = ${idArea};
    `;
    return database.executar(instrucao);
}

function deletaProjetoModel(idProjeto){
    var instrucao = `
        delete from projeto where idProjeto = ${idProjeto};
    `;
    return database.executar(instrucao);
}

function editarPrivacidadeModels(idProjeto, privacidade){
    var instrucao = `
        update projeto set privacidade = '${privacidade}' where idProjeto = ${idProjeto};   
    `;
    return database.executar(instrucao);
}

module.exports = { abrirProjetoModel, achaBlocosModel, deletaAreaProjetosModel, deletaProjetoModel, editarPrivacidadeModels };