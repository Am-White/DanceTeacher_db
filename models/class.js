module.exports = function(sequelize, DataTypes) {
    var Class = sequelize.define("Class", {
      classTitle: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      danceID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      instructorID: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  
    Class.associate = function(models) {
      Class.belongsTo(models.Instructor, {
        foreignKey: "id",
        as: "Instructor"
      });
      Class.belongsTo(models.Dance, {
        foreignKey: "id",
        as: "Dance"
      });

    };

  
    return Class;
  };