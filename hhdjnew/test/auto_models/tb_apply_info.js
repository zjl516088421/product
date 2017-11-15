/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_apply_info', {
		id: {
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
			allowNull: false
		},
		id_card: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		branch: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		sex: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		nation: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		hometown: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		birthday: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		apply_time: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00'
		},
		address: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		apply_pic: {
			type: DataTypes.STRING(500),
			allowNull: true
		},
		type: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'tb_apply_info',
		timestamps: false,
		createAt: false
	});
};
