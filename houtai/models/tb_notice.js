/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_notice', {
		notice_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		create_time: {
			type: DataTypes.DATE,
			allowNull: false
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
		tableName: 'tb_notice',
		timestamps: false
	});
};
