var express = require('express');
var router = express.Router();

var perfilController = require('../controllers/perfilController');

router.get('/perfil/:idPerfil', function(req, res){
    perfilController.encontraInfosPerfil(req, res)
})

router.post('/perfil/pesquisa/:idPerfil', function(req, res){
    perfilController.pesquisarPerfil(req, res)
})

router.post('/perfil/filtra/:idPerfil', function(req, res){
    perfilController.filtraPerfil(req, res)
})

router.get('/perfil/top/:idPerfil', function(req, res){
    perfilController.encontraTopPerfil(req, res)
})

module.exports =  router