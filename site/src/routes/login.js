var express = require("express");
var router = express.Router();

var usuarioController = require('../controllers/loginController')

router.get('/', function(req, res){
    res.render('loginSignup')
})

router.post('/cadastrar', function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post('/autenticar', function(req, res) {
    usuarioController.autenticar(req, res);
})

module.exports = router;