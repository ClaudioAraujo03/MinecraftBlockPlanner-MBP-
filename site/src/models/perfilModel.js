var database = require('../database/config')

function exibeInfos(idUser){
    var instrucao = `
        select (select count(*) from projeto where fkUsuario = ${idUser}) as totalProjetos, usuarios.*, projeto.*, areaProj.* from projeto 
            join usuarios on idUsuario = fkUsuario 
            join areaProj on fkProjeto = idProjeto where fkUsuario = ${idUser} and privacidade = 'público';
    `
    console.log(instrucao)
    return database.executar(instrucao);
}

function exibeInfosUsuario(idUser){
    var instrucao = `
        select * from usuarios where idUsuario = ${idUser};
    `
    console.log(instrucao)
    return database.executar(instrucao);
}

function pesquisarProjetoPerfil(pesquisa, idUser){
    if(pesquisa  == ''){
        var instrucao = `
        select * from usuarios 
        join projeto on fkUsuario = idUsuario
        join areaProj on fkProjeto = idProjeto
        join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
        left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
        left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
        where idUsuario = ${idUser} and privacidade = 'público';
        `; 
    } else{
        var instrucao = `
        select * from usuarios 
        left join projeto on fkUsuario = idUsuario
        left join areaProj on fkProjeto = idProjeto
        left join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
        left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
        left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
        where nomeProjeto like '%${pesquisa}%' and idUsuario = ${idUser} and privacidade = 'público';  
    `;
    }
    return database.executar(instrucao);
}

function filtraPerfilModel(area, ordem, idUser){
    if(area == 'paralelepipedo'){
        if(ordem == 'dataDesc'){
            var instrucao = `
            select * from usuarios 
            join projeto on fkUsuario = idUsuario
            join areaProj on fkProjeto = idProjeto
            join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
            left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
            left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
            where privacidade = 'público' and formato = 'paralelepipedo' and idUsuario = ${idUser} order by projeto.dtCriacaoProjeto desc
            ;`   
        } else if(ordem == 'dataAsc'){
            var instrucao = `
            select * from usuarios 
            join projeto on fkUsuario = idUsuario
            join areaProj on fkProjeto = idProjeto
            join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
            left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
            left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
            where privacidade = 'público' and formato = 'paralelepipedo' and idUsuario = ${idUser} order by projeto.dtCriacaoProjeto asc
            ;` 
        } else{
            var instrucao = `
            select * from usuarios 
            join projeto on fkUsuario = idUsuario
            join areaProj on fkProjeto = idProjeto
            join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
            left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
            left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
            where privacidade = 'público' and formato = 'paralelepipedo' and idUsuario = ${idUser};    
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
            where privacidade = 'público' and formato = 'circular' and idUsuario = ${idUser} order by projeto.dtCriacaoProjeto desc
            ;`   
        } else if(ordem == 'dataAsc'){
            var instrucao = `
            select * from usuarios 
            join projeto on fkUsuario = idUsuario
            join areaProj on fkProjeto = idProjeto
            join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
            left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
            left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
            where privacidade = 'público' and formato = 'circular' and idUsuario = ${idUser} order by projeto.dtCriacaoProjeto asc
            ;` 
        } else{
            var instrucao = `
            select * from usuarios 
            join projeto on fkUsuario = idUsuario
            join areaProj on fkProjeto = idProjeto
            join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
            left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
            left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
            where privacidade = 'público' and formato = 'circular' and idUsuario = ${idUser};    
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
            where privacidade = 'público' and idUsuario = ${idUser} order by projeto.dtCriacaoProjeto desc
            ;`   
        } else if(ordem == 'dataAsc'){
            var instrucao = `
            select * from usuarios 
            join projeto on fkUsuario = idUsuario
            join areaProj on fkProjeto = idProjeto
            join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
            left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
            left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
            where privacidade = 'público' and idUsuario = ${idUser} order by projeto.dtCriacaoProjeto asc
            ;` 
        } else{
            var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where privacidade = 'público' and idUsuario = ${idUser};    
            `;
        }
    }
    return database.executar(instrucao);
}

function mostraTopBlocos(idUser){
    var instrucao = `
        select count(nomeBloco) as quantidadeProjetos, nomeBloco 
        from blocos 
        join areaProj on fkBloco = idBloco
        join projeto on fkProjeto = idProjeto
        join usuarios on fkUsuario = idUsuario
        where idUsuario = ${idUser} group by (nomeBloco) order by quantidadeProjetos desc
        limit 5;
    `;
    return database.executar(instrucao)
}

module.exports = { exibeInfos, pesquisarProjetoPerfil, filtraPerfilModel, mostraTopBlocos, exibeInfosUsuario }