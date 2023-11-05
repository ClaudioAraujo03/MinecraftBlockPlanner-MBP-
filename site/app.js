process.env.AMBIENTE_PROCESSO = "desenvolvimento";

const express = require('express');
var cors = require("cors");
const app = express();
var path = require("path");

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.set("views", path.join(__dirname, "public"))

var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

app.use(cors());

var indexRoutes = require("./src/routes/index");
var loginRoutes = require("./src/routes/login");
var dashboardRoutesConfigs = require("./src/routes/configsUser");
var dashboardRoutesCreateProject = require("./src/routes/createProject");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRoutes);
app.use("/login", loginRoutes);
app.use("/dashboard", dashboardRoutesConfigs);
app.use("/dashboard", dashboardRoutesCreateProject);

app.listen(PORTA, () => {
    console.log(`Servidor rodando em : http://localhost:${PORTA}`);
});
