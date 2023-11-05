var express = require("express");
var router = express.Router();

var controllerCreateProject = require('../controllers/controllerCreateProject')

router.get('/criarProjeto', function(req, res){
    res.render('dashboard/createProject')
});

router.post('/criarProjeto/:idUsuario', function(req, res){
    controllerCreateProject.criarProjeto(req, res);
});

module.exports = router;