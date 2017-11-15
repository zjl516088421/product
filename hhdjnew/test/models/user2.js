
var Sequelize = require('sequelize')
var DB = require('./../db')
/*
 * 定义表的映射模型
 * https://sequelize.readthedocs.io/en/v3/docs/models-definition/
 * */
module.exports = DB.define('user',
	{
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: Sequelize.STRING(50),
			allowNull: false
		},
		password: {
			type: Sequelize.STRING(50),
			allowNull: false
		},
		id_card: {
			type: Sequelize.STRING(50),
			allowNull: false
		},
		phone: {
			type: Sequelize.STRING(15),
			allowNull: true
		},
		header: {
			type: Sequelize.STRING(100),
			allowNull: true
		}
	},
	{
		tableName: 'tb_user',//表名称
		timestamps: false,
	}
)