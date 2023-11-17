var express = require('express');
var router = express.Router();

var abrirMeuProjetoController = require('../controllers/projectController');

router.get('/project', function(req, res){
    res.render('dashboard/projectPage');
})

router.get('/project/:idProjeto', function(req, res){
    abrirMeuProjetoController.meuProjetoController(req, res);
})

router.get('/project/:idProjeto/blocos', function(req, res){
    abrirMeuProjetoController.achaBlocos(req, res);
})

module.exports = router;