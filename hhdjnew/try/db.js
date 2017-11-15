var Sequelize =  require('sequelize');
/*创建sequelize实例*/
var sequelize = new Sequelize('hhdj', 'root', 'root', {
  host: '192.168.1.110',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
module.exports = sequelize

