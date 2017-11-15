var Sequelize = require('sequelize')
var DB = require('./index')

var User = require('../models/tb_user')(DB, Sequelize)


/*查询所有*/
User.findAll({
  where:{
    sex:1
  },
  attributes:['id', 'username']
})
.then(function (res) {
  console.log(JSON.stringify(res))
})
.catch(function (ex) {
  console.log(ex)
})
