const express = require("express");
const pessoasRoutes = require("./pessoasRoute");
module.exports = (app) => {
  app.use(express.json());
  app.use(pessoasRoutes);

  app.get("/", (req, res) => {
    res.send("Bem Vindo");
  });
};
