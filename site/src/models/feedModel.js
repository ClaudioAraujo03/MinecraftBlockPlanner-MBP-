var database = require('../database/config')

function listaTodosProjetosModel(){
    var instrucao = `
        select * from usuarios 
        join projeto on fkUsuario = idUsuario
        join areaProj on fkProjeto = idProjeto
        join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
        left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
        left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
        where privacidade = 'público'
        ;`
    ;
    return database.executar(instrucao);
}

function dadosProjetos(){
    var instrucao = `
        select
        (select count(idProjeto) from projeto) as totalProjetos,
        (select count(formato) from areaProj where formato = 'paralelepipedo') as totalParalelepipedo,
        (select count(formato) from areaProj where formato = 'circular') as totalCircular;
    `;
    return database.executar(instrucao);
}

function pesquisarTodos(pesquisa){
    if(pesquisa  == ''){
        var instrucao = `
        select * from usuarios 
        join projeto on fkUsuario = idUsuario
        join areaProj on fkProjeto = idProjeto
        join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
        left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
        left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco;    
        `; 
    } else{
        var instrucao = `
        select * from usuarios 
        left join projeto on fkUsuario = idUsuario
        left join areaProj on fkProjeto = idProjeto
        left join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
        left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
        left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
        where nomeProjeto like '%${pesquisa}%' or usuarios.nick like '%${pesquisa}%';  
    `;
    }
    return database.executar(instrucao);
}

function filtraTodosModel(area, ordem){
        if(area == 'paralelepipedo'){
            if(ordem == 'dataDesc'){
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where privacidade = 'público' and formato = 'paralelepipedo' order by projeto.dtCriacaoProjeto desc
                ;`   
            } else if(ordem == 'dataAsc'){
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where privacidade = 'público' and formato = 'paralelepipedo' order by projeto.dtCriacaoProjeto asc
                ;` 
            } else{
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where privacidade = 'público' and formato = 'paralelepipedo';    
                `; 
            }
        } else if(area == 'circular'){
            if(ordem == 'dataDesc'){
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where privacidade = 'público' and formato = 'circular' order by projeto.dtCriacaoProjeto desc
                ;`   
            } else if(ordem == 'dataAsc'){
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where privacidade = 'público' and formato = 'circular' order by projeto.dtCriacaoProjeto asc
                ;` 
            } else{
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where privacidade = 'público' and formato = 'circular' ;    
                `; 
            }
        }else{
            if(ordem == 'dataDesc'){
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where privacidade = 'público' order by projeto.dtCriacaoProjeto desc
                ;`   
            } else if(ordem == 'dataAsc'){
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where privacidade = 'público' order by projeto.dtCriacaoProjeto asc
                ;` 
            } else{
                var instrucao = `
                    select * from usuarios 
                    join projeto on fkUsuario = idUsuario
                    join areaProj on fkProjeto = idProjeto
                    join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                    left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                    left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                    where privacidade = 'público';    
                `;
            }
        }
        return database.executar(instrucao);
    }

module.exports = { listaTodosProjetosModel, dadosProjetos, pesquisarTodos, filtraTodosModel }