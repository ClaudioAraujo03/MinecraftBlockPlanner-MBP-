var express = require("express");
var cors = require("cors");
var path = require("path");

var app = express();

var indexRouter = require("./src/routes/index");
var loginRouter = require("./src/routes/login");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("login", loginRouter);

app.listen(3000);
