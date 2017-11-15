/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_forum_comment', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
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
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'tb_forum_comment',
		timestamps: false,
		createAt: false
	});
};
