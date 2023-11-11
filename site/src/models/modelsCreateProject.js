var database = require("../database/config");

function criarProjeto(nomeProj, privacidade, dtCriacao, descricao, idUser){
    var instrucao1 = `
        insert into projeto (nome, descricao, privacidade, dtCriacaoProjeto, fkUsuario) values ('${nomeProj}', '${descricao}', '${privacidade}', '${dtCriacao}', ${idUser});
    `;
    return database.executar(instrucao1);
}
function achaProjeto(idUser, data){
    var instrucao2 = `
        select idProjeto from projeto where fkUsuario = ${idUser} and dtCriacaoProjeto = '${data}';
    `;
    return database.executar(instrucao2);
}
function criaArea(nomeArea, material, formato, largura, altura, comprimento, raio, idProj){
    var instrucao3 = `
        insert into areaProj (nome, formato, altura, largura, comprimento, raio, fkProjeto, fkBloco) values ('${nomeArea}', '${formato}', ${altura}, ${largura}, ${comprimento}, ${raio}, ${idProj}, ${material});
    `;
    return database.executar(instrucao3);
}

module.exports = { criarProjeto, achaProjeto, criaArea }