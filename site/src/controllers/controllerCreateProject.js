var criarProjetoModel = require('../models/modelsCreateProject');

function criarProjeto(req, res){
    var nomeProj = req.body.nomeProjetoServer
    var privProj = req.body.privacidadeProjetoServer
    var dtProj = req.body.dtCriacaoServer
    var descProj = req.body.descricaoServer
    var idUser = req.params.idUsuario

    criarProjetoModel.criarProjeto(nomeProj, 
        privProj, 
        dtProj, 
        descProj,        
        idUser
    )
    .then(
        function (resultado) {
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

function criaAreaController(req, res){
    var areaProj = req.body.nomeAreaServer
    var matProj = req.body.materialServer
    var formProj = req.body.formatoAreaServer
    var largProj = req.body.larguraAreaServer
    var dtProjKey = req.body.dtCriacaoKeyServer
    var altProj = req.body.alturaAreaServer
    var compProj = req.body.comprimentoAreaServer
    var raioProj = req.body.raioAreaServer
    var idUser = req.params.idUsuario

    setTimeout(() => {
        criarProjetoModel.achaProjeto(idUser, dtProjKey)
        .then(
            function(resultado) {
                criarProjetoModel.criaArea(areaProj,matProj, formProj, largProj, altProj, compProj, raioProj, resultado[0].idProjeto);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao criar a área! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
    }, 1500);
}
module.exports = { criarProjeto, criaAreaController }