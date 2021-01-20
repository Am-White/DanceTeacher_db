module.exports = function(sequelize, DataTypes) {
  var Instructor = sequelize.define("Instructor", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        max: 5
      }
    },

    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    hourlyRate: {
      type: DataTypes.INTEGER
    }

  });

  Instructor.associate = function(models) {

    Instructor.belongsToMany(models.Dance, {
      through: models.Class,
      as: 'dance',
      foreignKey: "instructorID"
    });
  };

  return Instructor;
};
