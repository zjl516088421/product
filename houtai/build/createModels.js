var SequelizeAuto = require('sequelize-auto')
/*
*  生成数据库映射表
* */
var auto = new SequelizeAuto('datadb', 'root', '123', {
  host: 'localhost',
  dialect: 'mysql',
  directory: '../models',
  port: '3306',
  additional: {
    timestamps: false
  }
})

auto.run(function (err) {
  if (err) throw err;

  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});

