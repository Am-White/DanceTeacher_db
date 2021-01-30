'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Dances", [
      {
        id: 1,
        danceTitle: "Salsa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        danceTitle: "Waltz",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        danceTitle: "Tango",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        danceTitle: "Bachata",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        danceTitle: "Cha-cha-cha",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        danceTitle: "Foxtrot",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Dances", null, {});
  }
};