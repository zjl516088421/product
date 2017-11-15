/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user_manager', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(32),
			allowNull: false
		}
	}, {
		tableName: 'user_manager',
		timestamps: false,
		createAt: false
	});
};
