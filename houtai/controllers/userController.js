var User = require('../models').User
var Integral = require('../models').Integral

var BaseCtrl = require('./baseController')
var crypto = require('crypto')


function UserCtrl() {

    /* 用户登录 */
    this.userLogin = (req, res, next) => {
        var username = req.body.username,
            password = req.body.password
        console.log(password,username)
        var self = this

        if (!username) {
            res.send(self.Result(0, '账号不能为空'))
            return
        }
        if (!password) {
            res.send(self.Result(0, '密码不能为空'))
            return
        }

        var md5 = crypto.createHash('md5')

        var param = {
            where: {
                password: md5.update(password).digest('hex'),
                $or: [{ id_card: username }, { phone: username }]
            }
        }

        User.findOne(param)
            .then(r => {
                console.log(r)
                if (r) {
                    res.send(self.Result(1, '登录成功', self.setToken(r)))
                } else {
                    res.send(self.Result(0, '登录失败'))
                }
            })
            .catch(r => {
                res.send(self.Result(0, '登录失败'))
            })
    }

    /* 修改密码 */

    this.updatePwd = (req, res, next) => {
        var oldpwd = req.body.oldpwd,
            newpwd = req.body.newpwd
        console.log(oldpwd, newpwd)
        var self = this

        if (!newpwd) {
            res.send(this.Result(0, '新密码不能空'))
            return
        }
        if (!oldpwd) {
            res.send(this.Result(0, '原密码不能空'))
            return
        }
        var md1 = crypto.createHash('md5')
        var oldKey = md1.update(oldpwd).digest('hex')
        var user = req.TOKEN_USER
        if (oldKey == user.password) {
            if (oldpwd == newpwd) {
                res.send(this.Result(1, '密码相同,无需修改'))
                return
            } else {
                var md2 = crypto.createHash('md5')
                var newKey = md2.update(newpwd).digest('hex')
                User.update({ password: newKey }, { where: { id: user.id, password: oldKey } })
                    .then(r => {
                        res.send(self.Result(1, '修改成功'))
                    })
                    .catch(r => {
                        res.send(self.Result(0, '修改密码失败'))
                    })
            }
        } else {
            res.send(self.Result(0, '原密码有误'))
        }
    }

    /* 用户详情 */
    this.userDetail = (req, res, next) => {
        var user = req.TOKEN_USER

        var self = this
        User.find({ where: { id: user.id }, attributes: { exclude: ['password'] } })
            .then(r => {
                res.send(self.Result(1, 'success', r))
            })
            .catch(r => {
                res.send(self.Result(0, 'error'))
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
                res.send(self.Result(1, '修改成功'))
            })
            .catch(r => {
                res.send(self.Result(0, '修改失败'))
            })
    }

    /* 用户积分 */
    this.integralList = (req, res, next) => {
        var user = req.TOKEN_USER
        var page = Number(req.query.page),
            pagesize = Number(req.query.pagesize)
        if (isNaN(page) || page < 0) {
            page = 1
        }
        if (isNaN(pagesize) || pagesize < 0) {
            pagesize = 10
        }
        console.log(page, pagesize)

        var self = this
        var param = {
            'limit': pagesize,
            'offset': (page - 1) * pagesize,
            where: { user_id: user.id }
        }
        Integral.findAndCountAll(param)
            .then(r => {
                res.send(self.Result(1, 'success', r))
            })
            .catch(r => {
                res.send(self.Result(0, 'error'))
            })

    }

}

UserCtrl.prototype = new BaseCtrl()
module.exports = new UserCtrl()
