var jwt = require('jwt-simple')
var User = require('../models').User
var md5=require('md5')
module.exports = function () {

    /* 检查token */
    this.checkToken = (req, res, next) => {
        var t=req.headers['access-token']
        if(!t){
            res.send(this.setResult(0,'no token'))
            return
        }
        
        var token = jwt.decode(t, 'hhdjsystem')
        if (!token) {
            res.send(this.setResult(0,'token验证失败'))
            return
        }
        User.find({ where: { id: token.id }})
        .then(r => {
            req.TOKEN_USER = r
            next()
        })
        .catch(r => {
            res.send(this.setResult(0,'token验证失败'))
        })

    }
    /* 设置token */
    this.setToken = (obj) => {
        return jwt.encode(obj, 'hhdjsystem')
    }


    /* 接口统一返回格式 */
    this.setResult=(code,message='success',data=null)=>{
        return{
            code:code,
            message:message,
            data:data
        }
    }
}
