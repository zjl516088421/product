/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_integral_rule', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		type: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		type_name: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		single_desc: {
			type: "DOUBLE",
			allowNull: true
		},
		max_num: {
			type: "DOUBLE",
			allowNull: true
		}
	}, {
		tableName: 'tb_integral_rule',
		timestamps: false
	});
};
