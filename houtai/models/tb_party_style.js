/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_party_style', {
		id: {
			type: DataTypes.STRING(32),
			allowNull: false,
			primaryKey: true
		},
		file_name: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		file_type: {
			type: DataTypes.INTEGER(10),
			allowNull: false
		},
		file_url: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		file_desc: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		create_time: {
			type: DataTypes.DATE,
			allowNull: false
		},
		update_time: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'tb_party_style',
		timestamps: false
	});
};
