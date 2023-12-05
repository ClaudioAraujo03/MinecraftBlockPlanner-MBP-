var express = require("express");
var router = express.Router();

var controllerCreateProject = require('../controllers/controllerCreateProject')

router.post('/criarProjeto/:idUsuario', function(req, res){
    controllerCreateProject.criarProjeto(req, res);
    controllerCreateProject.criaAreaController(req, res);
});

module.exports = router;