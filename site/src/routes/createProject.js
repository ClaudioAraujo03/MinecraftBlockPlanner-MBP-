var express = require("express");
var router = express.Router();

router.get('/criarProjeto', function(req, res){
    res.render('dashboard/createProject')
});

module.exports = router;