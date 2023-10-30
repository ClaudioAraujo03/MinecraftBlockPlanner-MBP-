process.env.AMBIENTE_PROCESSO = "desenvolvimento";

const express = require('express');
var cors = require("cors");
const app = express();
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

app.use(cors());

var indexRoutes = require('./src/routes/index');
var loginRoutes = require('./src/routes/login');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use('/', indexRoutes);
app.use('/login', loginRoutes);

app.listen(PORTA, () => {
    console.log(`Servidor rodando em : http://localhost:${PORTA}`);
});
