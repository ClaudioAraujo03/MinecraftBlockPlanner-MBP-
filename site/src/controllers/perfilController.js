var perfilModel = require('../models/perfilModel')

function encontraInfosPerfil(req, res){
    var idUsuario = req.params.idPerfil
    perfilModel.exibeInfos(idUsuario)
    .then(
        function(resposta){
            console.log(resposta)
            res.json(resposta)
        }
    )
    .catch(
        function(erro){
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar a busca do perfil do usuário! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    )
}

function encontraTopPerfil(req, res){
    var idUsuario = req.params.idPerfil
    perfilModel.mostraTopBlocos(idUsuario)
    .then(
        function(resposta){
            console.log(resposta)
            res.json(resposta)
        }
    )
    .catch(
        function(erro){
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar a busca do perfil do usuário! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    )
}

function pesquisarPerfil(req, res){
    var pesquisa = req.body.pesquisaServer
    var idUser = req.params.idPerfil
    perfilModel.pesquisarProjetoPerfil(pesquisa, idUser)
    .then(
        function(resultado){
            console.log(resultado)
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao procurar os projeto! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    ); 
}

function filtraPerfil(req, res){
    var area = req.body.areaServer
    var ordem = req.body.ordemServer
    var idUser = req.params.idPerfil

    perfilModel.filtraPerfilModel(area, ordem, idUser)
    .then(
        function(resultado){
            console.log(resultado)
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao filtrar os projetos! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    ); 
}

module.exports = { encontraInfosPerfil, pesquisarPerfil, filtraPerfil, encontraTopPerfil }