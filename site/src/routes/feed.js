var express = require('express')

var router = express.Router()

var feedControle = require('../controllers/feedController');

router.get('/feed', function(req, res){
    res.render('dashboard/feed')
})

router.get('/feed/projetos', function(req, res){
    feedControle.listaTodosProjetos(req, res)
})

router.get('/feed/dados', function(req, res){
    feedControle.dadosProjetosController(req, res)
})

router.post('/feed/pesquisa', function(req, res){
    feedControle.pesquisaTodosController(req, res)
})

router.post('/feed/filtra', function(req, res){
    feedControle.filtraTodosController(req, res)
})

module.exports = router;