/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_comment_relation', {
		id: {
			type: DataTypes.STRING(32),
			allowNull: false,
			primaryKey: true
		},
		comment_user_id: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		my_user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		others_user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		type: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'tb_comment_relation',
		timestamps: false,
		createAt: false
	});
};
