var User = require('../models').User
var Integral = require('../models').Integral
var BaseController = require('./BaseController')
var crypto = require('crypto')

function UserController() {
    /* 用户登录 */
    this.userLogin = (req, res, next) => {

        var account = req.body.account,
            password = req.body.password
        if (!account) {
            res.send(this.setResult(0, '账号空'))
            return
        }
        if (!password) {
            res.send(this.setResult(0, '账号空'))
            return
        }
        var self = this
        var md5 = crypto.createHash('md5')
        var param = {
            where: {
                password: md5.update(password).digest('hex'),
                $or: [{ id_card: account }, { phone: account }]
            }
        }
        User.find(param)
            .then(r => {
                res.send(self.setResult(1, 'success', self.setToken(r)))
            })
            .catch(r => {
                res.send(self.setResult(0, 'error'))
            })
    }
    this.userList = (req, res, next) => {
        var page = Number(req.query.page),
            size = Number(req.query.size)
        if (isNaN(page)) {
            page = 1
        }
        if (isNaN(size)) {
            size = 10
        }

    }
    /* 用户详情 */
    this.userDetail = (req, res, next) => {
        var user = req.TOKEN_USER
        var self = this
        User.find({ where: { id: user.id }, attributes: { exclude: ['password'] } })
            .then(r => {
                res.send(self.setResult(1, 'success', r))
            })
            .catch(r => {
                res.send(self.setResult(0, 'error'))
            })
    }
    /* 修改密码 */
    this.updatePwd = (req, res, next) => {

        var newpwd = req.body.newPwd
        oldpwd = req.body.oldPwd
        if (!newpwd) {
            res.send(this.setResult(0, '新密码不能空'))
            return
        }
        if (!oldpwd) {
            res.send(this.setResult(0, '原密码不能空'))
            return
        }
        var user = req.TOKEN_USER
        var md6 = crypto.createHash('md5')
        var oldmd5 = md6.update(oldpwd).digest('hex')
        if ((newpwd == oldpwd) && (oldmd5 == user.password)) {
            res.send(this.setResult(1, '修改成功1'))
            return
        }
        var self = this
        var md5 = crypto.createHash('md5')

        User.update({ password: md5.update(newpwd).digest('hex') }, { where: { id: user.id, password: oldmd5 } })
            .then(r => {
                res.send(self.setResult(1, '修改成功'))
            })
            .catch(r => {
                res.send(self.setResult(0, '修改密码失败'))
            })
    }
    /* 修改信息 */
    this.modifyInfo = (req, res, next) => {
        var newUser = {}
        if (req.body.username) {
            newUser.username = req.body.username
        }
        if (req.body.nation) {
            newUser.nation = req.body.nation
        }
        if (req.body.wx_num) {
            newUser.wx_num = req.body.wx_num
        }
        if (req.body.qq_num) {
            newUser.qq_num = req.body.qq_num
        }
        if (req.body.age) {
            newUser.age = req.body.age
        }
        if (req.body.sex) {
            newUser.age = req.body.age
        }
        if (req.body.birthday) {
            newUser.birthday = req.body.birthday
        }
        if (req.body.education) {
            newUser.education = req.body.education
        }
        if (req.body.job_rank) {
            newUser.job_rank = req.body.job_rank
        }
        if (req.body.address) {
            newUser.address = req.body.address
        }
        var user = req.TOKEN_USER
        var self = this
        User.update(newUser, { where: { id: user.id } })
            .then(r => {
                res.send(self.setResult(1, '修改成功'))
            })
            .catch(r => {
                res.send(self.setResult(0, '修改失败'))
            })
    }
    /* 积分列表 */
    this.integralList = (req, res, next) => {
        var user = req.TOKEN_USER
        var page = Number(req.query.page),
            size = Number(req.query.size)
        if (isNaN(page) || page < 0) {
            page = 1
        }
        if (isNaN(size) || page < 0) {
            size = 10
        }
        var self = this
        var param = {
            'limit': size,
            'offset': (page - 1) * size,
             where: { user_id: user.id }
        }
        Integral.findAndCountAll(param)
        .then(r=>{
            res.send(self.setResult(1,'success',r))
        })
        .catch(r=>{
            res.send(self.setResult(0))
        })
    }
}
UserController.prototype = new BaseController()
module.exports = new UserController()