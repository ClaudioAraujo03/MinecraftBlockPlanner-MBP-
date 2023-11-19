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

function filtrarModel(idUser, privacidade, area, ordem){
    if(privacidade == 'privado'){
        if(area == 'paralelepipedo'){
            if(ordem == 'dataDesc'){
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where idUsuario = ${idUser} and privacidade = 'privado' and formato = 'paralelepipedo' order by projeto.dtCriacaoProjeto desc
                ;`   
            } else if(ordem == 'dataAsc'){
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where idUsuario = ${idUser} and privacidade = 'privado' and formato = 'paralelepipedo' order by projeto.dtCriacaoProjeto asc
                ;` 
            }else{                
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where idUsuario = ${idUser} and privacidade = 'privado' and formato = 'paralelepipedo';    
                `; 
            }
        }else if(area == 'circular'){
            if(ordem == 'dataDesc'){
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where idUsuario = ${idUser} and privacidade = 'privado' and formato = 'circular' order by projeto.dtCriacaoProjeto desc
                ;`   
            } else if(ordem == 'dataAsc'){
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where idUsuario = ${idUser} and privacidade = 'privado' and formato = 'circular' order by projeto.dtCriacaoProjeto asc
                ;` 
            } else{
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where idUsuario = ${idUser} and privacidade = 'privado' and formato = 'circular';    
                `; 
            }
        } else{
            if(ordem == 'dataDesc'){
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where idUsuario = ${idUser} and privacidade = 'privado' order by projeto.dtCriacaoProjeto desc
                ;`   
            } else if(ordem == 'dataAsc'){
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where idUsuario = ${idUser} and privacidade = 'privado' order by projeto.dtCriacaoProjeto asc
                ;` 
            } else{
                var instrucao = `
                    select * from usuarios 
                    join projeto on fkUsuario = idUsuario
                    join areaProj on fkProjeto = idProjeto
                    join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                    left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                    left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                    where idUsuario = ${idUser} and privacidade = 'privado';    
                `; 
            }
        }
    } else if(privacidade == 'público'){
        if(area == 'paralelepipedo'){
            if(ordem == 'dataDesc'){
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where idUsuario = ${idUser} and privacidade = 'público' and formato = 'paralelepipedo' order by projeto.dtCriacaoProjeto desc
                ;`   
            } else if(ordem == 'dataAsc'){
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where idUsuario = ${idUser} and privacidade = 'público' and formato = 'paralelepipedo' order by projeto.dtCriacaoProjeto asc
                ;` 
            } else{
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where idUsuario = ${idUser} and privacidade = 'público' and formato = 'paralelepipedo';    
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
                where idUsuario = ${idUser} and privacidade = 'público' and formato = 'circular' order by projeto.dtCriacaoProjeto desc
                ;`   
            } else if(ordem == 'dataAsc'){
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where idUsuario = ${idUser} and privacidade = 'público' and formato = 'circular' order by projeto.dtCriacaoProjeto asc
                ;` 
            } else{
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where idUsuario = ${idUser} and privacidade = 'público' and formato = 'circular' ;    
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
                where idUsuario = ${idUser} and privacidade = 'público' order by projeto.dtCriacaoProjeto desc
                ;`   
            } else if(ordem == 'dataAsc'){
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where idUsuario = ${idUser} and privacidade = 'público' order by projeto.dtCriacaoProjeto asc
                ;` 
            } else{
                var instrucao = `
                    select * from usuarios 
                    join projeto on fkUsuario = idUsuario
                    join areaProj on fkProjeto = idProjeto
                    join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                    left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                    left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                    where idUsuario = ${idUser} and privacidade = 'público';    
                `;
            }
        }
    } else{
        if(area == 'paralelepipedo'){
            if(ordem == 'dataDesc'){
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where idUsuario = ${idUser} and formato = 'paralelepipedo' order by projeto.dtCriacaoProjeto desc
                ;`   
            } else if(ordem == 'dataAsc'){
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where idUsuario = ${idUser} and formato = 'paralelepipedo' order by projeto.dtCriacaoProjeto asc
                ;` 
            } else{
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where idUsuario = ${idUser} and formato = 'paralelepipedo';    
                `;
            }
        }else if(area == 'circular'){
            if(ordem == 'dataDesc'){
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where idUsuario = ${idUser} and formato = 'circular' order by projeto.dtCriacaoProjeto desc
                ;`   
            } else if(ordem == 'dataAsc'){
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where idUsuario = ${idUser} and formato = 'circular' order by projeto.dtCriacaoProjeto asc
                ;` 
            } else{
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where idUsuario = ${idUser} and formato = 'circular';
                `;  
            }
        } else{
            if(ordem == 'dataDesc'){
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where idUsuario = ${idUser} order by projeto.dtCriacaoProjeto desc
                ;`   
            } else if(ordem == 'dataAsc'){
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where idUsuario = ${idUser} order by projeto.dtCriacaoProjeto asc
                ;` 
            } else{
                var instrucao = `
                select * from usuarios 
                join projeto on fkUsuario = idUsuario
                join areaProj on fkProjeto = idProjeto
                join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
                left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
                left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
                where idUsuario = ${idUser};    
                `;     
            }
        }
    }
    return database.executar(instrucao);
}

module.exports = { listaDeProjetos, search, filtrarModel };