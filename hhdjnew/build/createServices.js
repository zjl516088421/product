/* 使用此文件创建时确保models内的数据库映射配置文件已存在 */

let fs=require('fs')
let files=fs.readdirSync("./models")//读取生成的models文件

/* 文件内容模板 */
function template(Model){
    return `
var ${Model} = require("../models").${Model}

module.exports={
    insert:function(obj,next){
        ${Model}.create(obj)
        .then(r=>{
            typeof next ==='function'&&next(r)
        })
        .catch(e=>{
            typeof next ==='function'&&next(null)
        })
    },
    find:function(where,next,attributes={exclude:[]}){
        ${Model}.find({attributes,where})
        .then(r=>{
            typeof next ==='function'&&next(r)
        })
        .catch(e=>{
            typeof next ==='function'&&next(null)
        })
    },
    pager:function (obj,where,next,attributes={exclude: []}) {
        var param={
            'attributes':attributes,
            'limit':obj.size,
            'offset':(obj.page-1)*obj.size,
        }
        if(where){
            param.where=where;
        }
        ${Model}.findAndCountAll(param)
        .then(r=> {
            typeof next ==='function'&&next(r)
        })
        .catch(e=> {
            typeof next ==='function'&&next(null)
        })
    },

    update:function (obj,where,next) {
        ${Model}.update(obj,{where})
        .then(function (result) {
            typeof next ==='function'&& next(result&&result[0]>0);
        })
        .catch(function (err) {
            typeof next ==='function'&&next(null)
        })
    }
}

`}
/* 视情况实现 */
files.forEach(item=> {
    let names=item.split('.')[0].split('_')
    let name=''
    for(let i=1;i<names.length;i++){
        name+=names[i].substring(0,1).toUpperCase()+names[i].substring(1)
    }
    fs.writeFile("./services/"+name+"Service.js",template(name),function () {
        console.log("create services/"+name+"Service.js")
    })
 })
 