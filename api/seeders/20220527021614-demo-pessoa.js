"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Pessoas",
      [
        {
          nome: "Mauricio Souza",
          ativo: true,
          email: "m@m.com",
          role: "Discente",
          createdAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          nome: "Yasmim Arrais",
          ativo: true,
          email: "y@y.com",
          role: "Docente",
          createdAt: new Date(),
          UpdatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};
