const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando DB
mongoose.connect("mongodb://localhost:27017/batoons", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
requireDir("./src/models");

// Rotas
app.use("/api", require("./src/routes"));

app.listen(3002);
