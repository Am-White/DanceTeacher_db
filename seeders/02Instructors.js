'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Instructors", [
      {
        id: 1,
        name: "Roseanna",
        lastName: "Pollard",
        rating: 5,
        location: "Seattle",
        hourlyRate: 110,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Bryony",
        lastName: "Hulme",
        rating: 5,
        location: "Redmond",
        hourlyRate: 115,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "Braiden",
        lastName: "Dalton",
        rating: 3,
        location: "Kirkland",
        hourlyRate: 95,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: "Nancy",
        lastName: "Hu",
        rating: 5,
        location: "Issaquah",
        hourlyRate: 115,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: "Robby",
        lastName: "Knight",
        rating: 4,
        location: "Seattle",
        hourlyRate: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: "Kevin",
        lastName: "Tran",
        rating: 5,
        location: "Bellevue",
        hourlyRate: 120,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        name: "Annabel",
        lastName: "Ly",
        rating: 3,
        location: "Renton",
        hourlyRate: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        name: "Ann",
        lastName: "Nguyen",
        rating: 4,
        location: "Renton",
        hourlyRate: 95,
        createdAt: new Date(),
        updatedAt: new Date(),
      },      

    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Instructors", null, {});
  }
};

