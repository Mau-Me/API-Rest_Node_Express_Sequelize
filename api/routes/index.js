const express = require("express");
const pessoasRoutes = require("./pessoasRoute");
const niveisRoutes = require("./niveisRoute");
const turmasRoutes = require("./turmasRoute");

module.exports = (app) => {
  app.use(express.json(), pessoasRoutes, niveisRoutes, turmasRoutes);

  app.get("/", (req, res) => {
    res.send("Bem Vindo");
  });
};
