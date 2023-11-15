var database = require('../database/config')

function listaDeProjetos(idUser){
    var instrucao = `
        select * from usuarios 
        join projeto on fkUsuario = idUsuario
        join areaProj on fkProjeto = idProjeto
        join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
        left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
        left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
        where idUsuario = ${idUser};    
    `;
    return database.executar(instrucao);
}

function search(idUser, pesquisa){
    if(pesquisa  == ''){
        var instrucao = `
        select * from usuarios 
        join projeto on fkUsuario = idUsuario
        join areaProj on fkProjeto = idProjeto
        join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
        left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
        left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
        where idUsuario = ${idUser};    
        `; 
    } else{
        var instrucao = `
        select * from usuarios 
        left join projeto on fkUsuario = idUsuario
        left join areaProj on fkProjeto = idProjeto
        left join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
        left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
        left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
        where idUsuario = ${idUser} and nomeProjeto like '%${pesquisa}%';  
    `;
    }
    return database.executar(instrucao);
}

module.exports = { listaDeProjetos, search };