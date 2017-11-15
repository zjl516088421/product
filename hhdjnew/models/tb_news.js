/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_news', {
		news_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		author: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		titleDesc: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		pic: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		create_time: {
			type: DataTypes.DATE,
			allowNull: false
		},
		update_time: {
			type: DataTypes.DATE,
			allowNull: false
		},
		type: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		count: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		comment: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'tb_news',
		timestamps: false,
		createAt: false
	});
};
