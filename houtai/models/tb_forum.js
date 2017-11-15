/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_forum', {
		forum_id: {
			type: DataTypes.STRING(32),
			allowNull: false,
			primaryKey: true
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		username: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		header: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		create_time: {
			type: DataTypes.DATE,
			allowNull: false
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
		}
	}, {
		tableName: 'tb_forum',
		timestamps: false
	});
};
