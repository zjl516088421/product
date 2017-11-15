/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_comment', {
		id: {
			type: DataTypes.STRING(32),
			allowNull: false,
			primaryKey: true
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		create_time: {
			type: DataTypes.TIME,
			allowNull: true,
			defaultValue: '0000-00-00 00:00:00'
		},
		title_desc: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		is_open: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'tb_comment',
		timestamps: false,
		createAt: false
	});
};
