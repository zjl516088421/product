var DB=require('../db')
var Sequelize=require('sequelize')

var User=require('./tb_user')(DB,Sequelize)
module.exports.User=User