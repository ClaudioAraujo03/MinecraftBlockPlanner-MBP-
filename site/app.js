const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});

app.get('/login', function(req, res){
    res.sendFile(__dirname + "/public/loginSignup.html");
});

app.listen(3000);
