/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_forum_view', {
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		forum_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		create_time: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00'
		},
		is_priv: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		content: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		type: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
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
		tableName: 'tb_forum_view',
		timestamps: false,
		createAt: false
	});
};
