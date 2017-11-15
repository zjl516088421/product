var Sequelize =  require('sequelize');
/*创建sequelize实例*/
var sequelize = new Sequelize('hhdj', 'root', 'root', {
	host: '127.0.0.1',
	dialect: 'mysql',
	/*underscored:true,*/
	/*连接池*/
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});
module.exports=sequelize
