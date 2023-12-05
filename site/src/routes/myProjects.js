var express = require('express');
var router = express.Router();

var myProjectsController = require('../controllers/listMyProjectsController')

router.get('/myListProjects/:idUsuario', function(req, res){
    myProjectsController.listaProjetos(req, res);
})

router.post('/myListProjects/pesquisa/:idUsuario', function(req, res){
    myProjectsController.searchProject(req, res);
})

router.post('/myListProjects/filtra/:idUsuario', function(req, res){
    myProjectsController.filtraController(req, res);
})

module.exports = router;