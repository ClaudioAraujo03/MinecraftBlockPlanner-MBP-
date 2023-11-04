var configsModel = require('../models/configsUserModel');

function editar(req, res){
    var nick = req.body.nickConfigServer;
    var senha = req.body.senhaConfigServer;
    var id = req.params.idUsuario;

    configsModel.editar(nick, senha, id)
        .then(
            function(resultado){
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a edição! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
};

function deletar(req, res){
    var idUsuario = req.params.idUsuario

    configsModel.deletar(idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = { editar, deletar }