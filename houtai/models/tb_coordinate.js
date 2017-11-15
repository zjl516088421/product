/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_coordinate', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		branch_id: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		address: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		branch_name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		longitude: {
			type: "DOUBLE",
			allowNull: false
		},
		latitude: {
			type: "DOUBLE",
			allowNull: true
		}
	}, {
		tableName: 'tb_coordinate',
		timestamps: false
	});
};
