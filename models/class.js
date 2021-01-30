module.exports = function(sequelize, DataTypes) {
	var Class = sequelize.define("Class", {
		classTitle: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [ 1 ]
			}
		},
		danceID: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		instructorID: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	});

	Class.associate = function(models) {
		Class.belongsTo(models.Instructor, {
			foreignKey: "instructorID",
			as: "Instructor"
		});
		Class.belongsTo(models.Dance, {
			foreignKey: "danceID",
			as: "Dance"
		});
	};

	return Class;
};
