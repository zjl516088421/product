/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_study_file', {
		id: {
			type: DataTypes.STRING(32),
			allowNull: false,
			primaryKey: true
		},
		file_name: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		file_url: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		count: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		create_time: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00'
		},
		type: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		}
	}, {
		tableName: 'tb_study_file',
		timestamps: false,
		createAt: false
	});
};
