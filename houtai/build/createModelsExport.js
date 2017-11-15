/**
 * Created by zhangjinlei on 17/10/19.
 */
let fs = require('fs')
let files = fs.readdirSync("../models")//读取models
let models=[]
/* 视情况实现 */
files.forEach(item => {
  if(item != 'index.js'){
  let names = item.split('.')[0].split('_')
  let name = ''
  for(let i = 1; i < names.length; i++){
    name += names[i].substring(0,1).toUpperCase() + names[i].substring(1)
  }
  models.push({name:name,path:"./"+item})
}
})

/* 文件内容模板 */
const template=`
var Sequelize =  require('sequelize');
/* 创建数据库连接 */
var sequelize = new Sequelize("database_name","username","password",{
    host:"127.0.0.1",
    dialect:"mysql",
    underscored:true
})
/* 数据库模型名称配置及路径 */
const models=${JSON.stringify(models,null,4)}
/* 数据库模型输出 */
models.forEach(item=>{
    module.exports[item.name]=require(item.path)(sequelize,Sequelize);
})
`
/* 创建模型主文件 */
fs.writeFile("../models/index.js",template,function () {
  console.log('create models/index.js success')
})
