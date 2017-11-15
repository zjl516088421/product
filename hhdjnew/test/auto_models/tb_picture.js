/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_picture', {
		pic_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		pic_url: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		pic_name: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		pic_desc: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		link_id: {
			type: DataTypes.STRING(32),
			allowNull: true
		}
	}, {
		tableName: 'tb_picture',
		timestamps: false,
		createAt: false
	});
};
