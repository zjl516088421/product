/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_branch', {
		id: {
			type: DataTypes.STRING(32),
			allowNull: false,
			primaryKey: true
		},
		branch: {
			type: DataTypes.STRING(100),
			allowNull: false
		}
	}, {
		tableName: 'tb_branch',
		timestamps: false,
		createAt: false
	});
};
