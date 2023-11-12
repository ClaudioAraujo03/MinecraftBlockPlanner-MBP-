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

module.exports = { meuProjetoController };