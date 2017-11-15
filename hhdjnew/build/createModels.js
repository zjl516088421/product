var SequelizeAuto = require('sequelize-auto')
var auto = new SequelizeAuto(
    'hhdj', 'root', 'root', {
        host: 'localhost',
        dialect: 'mysql',
        directory: './models/', 
        port: '3306',
        additional: {
            timestamps: false,
            createAt:false
        }
    }
);

auto.run(function (err) {
  if (err) throw err;

  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});
