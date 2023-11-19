var express = require('express')

var router = express.Router()

var feedController = require('../controllers/feedController');

router.get('/feed', function(req, res){
    res.render('dashboard/feed')
})

module.exports = router;