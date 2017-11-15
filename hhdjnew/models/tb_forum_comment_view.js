/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_forum_comment_view', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			primaryKey: true
		},
		forum_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		comment: {
			type: DataTypes.STRING(300),
			allowNull: false
		},
		create_time: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00'
		},
		username: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		header: {
			type: DataTypes.STRING(100),
			allowNull: true
		}
	}, {
		tableName: 'tb_forum_comment_view',
		timestamps: false,
		createAt: false
	});
};
