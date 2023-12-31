var express = require('express');
var router = express.Router();

var configsUserController = require('../controllers/configsUserController');

router.put('/configuracao/:idUsuario', function(req, res){
    configsUserController.editar(req, res);
});

router.delete('/configuracao/:idUsuario', function(req, res){
    configsUserController.deletar(req, res);
});

module.exports =  router ;