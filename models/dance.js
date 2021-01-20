module.exports = function(sequelize, DataTypes) {
  var Dance = sequelize.define("Dance", {
    danceTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Dance.associate = function(models) {
    Dance.belongsToMany(models.Instructor, {
      through: models.Class,
      as: 'instructor',
      foreignKey: "danceID"
    });
  };

  return Dance;
};
