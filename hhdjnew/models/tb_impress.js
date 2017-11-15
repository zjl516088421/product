/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_impress', {
		id: {
			type: DataTypes.STRING(32),
			allowNull: false,
			primaryKey: true
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		create_time: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00'
		},
		type: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		reason: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'tb_impress',
		timestamps: false,
		createAt: false
	});
};
