var feedModels = require('../models/feedModel')

function listaTodosProjetos(req, res){
    feedModels.listaTodosProjetosModel()
    .then(
        function(resultado){
            console.log(resultado)
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao listar os projeto! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function dadosProjetosController(req, res){
    feedModels.dadosProjetos()
    .then(
        function(resultado){
            console.log(resultado)
            res.json(resultado)
        }
    ).catch(
        function(erro){
            console.log(erro)
            console.log(
                "\nHouve um erro ao exibir os dados! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    )
}

function pesquisaTodosController(req, res){
    var pesquisa = req.body.pesquisaServer
    feedModels.pesquisarTodos(pesquisa)
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

module.exports = { listaTodosProjetos, dadosProjetosController, pesquisaTodosController }