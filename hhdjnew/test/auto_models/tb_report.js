/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_report', {
		id: {
			type: DataTypes.STRING(32),
			allowNull: false,
			primaryKey: true
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		pic_id: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		type: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		create_time: {
			type: DataTypes.DATE,
			allowNull: false
		},
		is_accept: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		reason: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'tb_report',
		timestamps: false,
		createAt: false
	});
};
