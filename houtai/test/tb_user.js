var Sequelize = require('sequelize')
var DB = require('./index')
/*
 * 定义表的映射模型
 * https://sequelize.readthedocs.io/en/v3/docs/models-definition/
 * */

module.exports = DB.define('tb_user',
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
    },
    disabled:{
      type: Sequelize.INTEGER,
      defaultValue:0
    }
  },
  {
    freezeTableName:true,//Model 对应的表名将与model名相同
    // 是否需要增加createdAt、updatedAt、deletedAt字段
    'timestamps': false,
  }
)







