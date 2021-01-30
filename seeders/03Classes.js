'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Classes", [
      {
        classTitle: "Salsa Rythms",
        danceID: 1,
        instructorID: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        classTitle: "Salsa Vibes",
        danceID: 1,
        instructorID: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        classTitle: "Salsa Rythms",
        danceID: 1,
        instructorID: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        classTitle: "Salsa with Ann",
        danceID: 1,
        instructorID: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        classTitle: "Let's Waltz",
        danceID: 2,
        instructorID: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        classTitle: "Waltz of the Flowers",
        danceID: 2,
        instructorID: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Classes", null, {});
  }
};