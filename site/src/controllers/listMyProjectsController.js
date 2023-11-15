var myProjectsModel = require('../models/listMyProjectsModel')

function listaProjetos(req, res){
    var idUser = req.params.idUsuario
    myProjectsModel.listaDeProjetos(idUser)
    .then(
        function(resultado){
            console.log(resultado)
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao criar o projeto! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    ); 
}

function searchProject(req, res){
    var pesquisa = req.body.pesquisaServer;
    var idUser = req.params.idUsuario
    myProjectsModel.search(idUser,pesquisa)
    .then(
        function(resultado){
            console.log(resultado)
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao criar o projeto! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    ); 
}

module.exports = { listaProjetos, searchProject }