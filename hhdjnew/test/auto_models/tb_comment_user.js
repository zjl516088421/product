/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_comment_user', {
		id: {
			type: DataTypes.STRING(32),
			allowNull: false,
			primaryKey: true
		},
		comment_id: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		branch_id: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		select_branch: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		summary: {
			type: DataTypes.STRING(500),
			allowNull: false
		},
		first_count: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		second_count: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		third_count: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		fourth_count: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		enable: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		}
	}, {
		tableName: 'tb_comment_user',
		timestamps: false,
		createAt: false
	});
};
