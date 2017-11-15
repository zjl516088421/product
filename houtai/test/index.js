var Sequelize =  require('sequelize');
/*创建sequelize实例*/
var sequelize = new Sequelize('datadb', 'root', '123', {
  host: '127.0.0.1',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
module.exports = sequelize

