var jwt = require('jwt-simple')
var User = require('../models').User


module.exports = function () {
    /* 检查token*/
    this.checkToken = (req, res, next) => {
        var t = req.headers['acces-token']
        console.log(t)
        if (!t) {
            res.send(this.Result(0, '无 token 请登录'))
            return
        }
        var token = jwt.decode(t, 'hhdjsystem')
        if (!token) {
            res.send(this.Result(0, 'token验证失败 请登录'))
            return
        }
        User.find({ where: { id: token.id }})
            .then(r => {
                req.TOKEN_USER = r
                next()
            })
            .catch( r => {
                res.send(this.Result(0,'token验证失败'))
            })
    }

    /* 设置token */
    this.setToken = (obj) => {
        return jwt.encode(obj, 'hhdjsystem')
    }

    /*  统一返回状态码 */
    this.Result = (code, message, data=null) => {
        return {
            code: code,
            message: message,
            data: data
        }
    }
}