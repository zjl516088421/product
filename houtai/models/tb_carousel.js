/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_carousel', {
		id: {
			type: DataTypes.STRING(32),
			allowNull: false,
			primaryKey: true
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		url: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		img_url: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		priority: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '1'
		},
		type: {
			type: DataTypes.INTEGER(11).UNSIGNED.ZEROFILL,
			allowNull: false,
			defaultValue: '00000000000'
		},
		status: {
			type: DataTypes.INTEGER(11).UNSIGNED.ZEROFILL,
			allowNull: true
		},
		create_time: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'tb_carousel',
		timestamps: false
	});
};
