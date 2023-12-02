process.env.AMBIENTE_PROCESSO = "desenvolvimento";

const express = require('express');
var cors = require("cors");
const app = express();
var path = require("path");

// app.engine("html", require("ejs").renderFile);
// app.set("view engine", "html");


var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

app.use(cors());

var indexRoutes = require("./src/routes/index");
var loginRoutes = require("./src/routes/login");
var dashboardRoutesConfigs = require("./src/routes/configsUser");
var dashboardRoutesCreateProject = require("./src/routes/createProject");
var dashboardRoutesMyListProjects = require("./src/routes/myProjects");
var dashboardRoutesProject = require("./src/routes/project");
var dashboardFeed = require("./src/routes/feed")
var dashboardRoutesPerfil = require("./src/routes/perfil")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "public"))

app.use("/", indexRoutes);
app.use("/login", loginRoutes);
app.use("/dashboard", dashboardRoutesConfigs);
app.use("/dashboard", dashboardRoutesCreateProject);
app.use("/dashboard", dashboardRoutesMyListProjects);
app.use("/dashboard", dashboardRoutesProject);
app.use("/dashboard", dashboardFeed);
app.use("/dashboard", dashboardRoutesPerfil)

app.listen(PORTA, () => {
    console.log(`Servidor rodando em : http://localhost:${PORTA}`);
});
