/*var DB=require('./db')
var Sequelize=require('sequelize')
var User=require('./auto_models/tb_user')(DB,Sequelize)*/


var User=require('./auto_models').User

User.find({where:{id:1}})
	.then(function (res) {
		console.log(JSON.stringify(res))
	})


