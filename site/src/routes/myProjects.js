var express = require('express');
var router = express.Router();

var myProjectsController = require('../controllers/listMyProjectsController')

router.get('/myListProjects', function(req, res){
    res.render('dashboard/myProjects');
})

router.get('/myListProjects/:idUsuario', function(req, res){
    myProjectsController.listaProjetos(req, res);
})

router.post('/myListProjects/pesquisa/:idUsuario', function(req, res){
    myProjectsController.searchProject(req, res);
})

module.exports = router;