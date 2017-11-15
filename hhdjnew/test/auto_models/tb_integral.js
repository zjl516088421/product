/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_integral', {
		id: {
			type: DataTypes.STRING(32),
			allowNull: false,
			primaryKey: true
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		type: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		type_name: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		cur_max: {
			type: "DOUBLE",
			allowNull: true,
			defaultValue: '0'
		},
		single_desc: {
			type: "DOUBLE",
			allowNull: true
		},
		max_num: {
			type: "DOUBLE",
			allowNull: true
		},
		create_time: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00'
		}
	}, {
		tableName: 'tb_integral',
		timestamps: false,
		createAt: false
	});
};
