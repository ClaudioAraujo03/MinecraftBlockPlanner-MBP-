var express = require('express');
var router = express.Router();

var abrirMeuProjetoController = require('../controllers/projectController');

router.get('/project/:idProjeto', function(req, res){
    abrirMeuProjetoController.meuProjetoController(req, res);
})

router.get('/project/:idProjeto/blocos', function(req, res){
    abrirMeuProjetoController.achaBlocos(req, res);
})

router.delete('/project/:idProjeto/:idArea', function(req, res){
    abrirMeuProjetoController.deletaProjetoController(req, res);
});

router.put('/project/:idProjeto', function(req, res){
    abrirMeuProjetoController.editarPrivacidadeController(req, res);
});

module.exports = router;