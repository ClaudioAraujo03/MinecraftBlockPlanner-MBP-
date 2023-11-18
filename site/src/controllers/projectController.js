var modelMeuProjeto = require('../models/projectModel');

function meuProjetoController(req, res){
    var idProject = req.params.idProjeto;
    modelMeuProjeto.abrirProjetoModel(idProject)
    .then(
        function(resultado){
            console.log(resultado)
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao abrir o projeto! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    ); 
}

function achaBlocos(req, res){
    modelMeuProjeto.achaBlocosModel()
    .then(
        function(resultado){
            console.log(resultado)
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao achar os blocos! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    ); 
}

function deletaProjetoController(req, res){
    var idMeuProjeto = req.params.idProjeto;
    var idMinhaArea = req.params.idArea;
    modelMeuProjeto.deletaAreaProjetosModel(idMinhaArea)
    .then(
        function(resultado){
            console.log(resultado)
            res.json(resultado);
            modelMeuProjeto.deletaProjetoModel(idMeuProjeto)
            .then(
                function(resultado){
                    console.log(resultado)
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao Apagar o projeto! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            )
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao Apagar a area! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    )
}

function editarPrivacidadeController(req, res){
    var idProjeto = req.params.idProjeto;
    var privacidade = req.body.privacidadeServer;
    modelMeuProjeto.editarPrivacidadeModels(idProjeto, privacidade)
    .then(
        function(resultado){
            console.log(resultado)
            res.json(resultado)
        }
    ).catch(
        function(erro){
            console.log(erro);
            console.log(
                "\nHouve um erro ao editar a privacidade do projeto! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    )
}

module.exports = { meuProjetoController, achaBlocos, deletaProjetoController, editarPrivacidadeController};