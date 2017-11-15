var ctrl =require('../../controllers/UserController')

module.exports=[
 /**
 * @api {post} /user/userLogin 用户登录
 * @apiVersion 1.0.0
 * @apiName userLogin
 * @apiGroup User
 * @apiParam {String} account 用户的用户名或者手机号
 * @apiParam {String} password 用户的密码
 * @apiSuccess {Number} code 结果标识
 * @apiSuccess {String} message 结果说明
 * @apiSuccess {Object} data 用户token
 * @apiSuccessExample Success-Response:
 *     HTTP/11 200 OK
 *     {
 *       "code": 1,
 *       "mess": "成功",
 *       "data": {}
 *     }
 */
    {
        router:"/user/userLogin",
        method:"post",
        ctrls:[ctrl.userLogin]
    },

 /**
 * @api {get} /user/userList 用户列表
 * @apiVersion 1.0.0
 * @apiName userList
 * @apiGroup User
 * @apiParam {Number} page 用户的用户名或者手机号
 * @apiParam {Number} size 用户的密码
 * @apiSuccess {Number} code 结果标识
 * @apiSuccess {String} message 结果说明
 * @apiSuccess {Object} data 结果数据
 * @apiSuccessExample Success-Response:
 *     HTTP/11 200 OK
 *     {
 *       "code": 1,
 *       "mess": "成功",
 *       "data": {}
 *     }
 */
    {
        router:"/user/userList",
        method:"get",
        ctrls:[ctrl.userList]
    },
/**
 * @api {get} /user/userDetailt 用户详情
 * @apiVersion 1.0.0
 * @apiName userDetailt
 * @apiGroup User
 * @apiHeader {String} acces-token 用户token
 * @apiSuccess {Number} code 结果标识
 * @apiSuccess {String} message 结果说明
 * @apiSuccess {Object} data 结果数据
 * @apiSuccessExample Success-Response:
 *     HTTP/11 200 OK
 *     {
 *       "code": 1,
 *       "mess": "成功",
 *       "data": {}
 *     }
 */
    {
        router:"/user/userDetail",
        method:"get",
        ctrls:[ctrl.checkToken,ctrl.userDetail]
    },
/**
 * @api {post} /user/integralList 用户积分
 * @apiVersion 1.0.0
 * @apiName integralList
 * @apiGroup User
 * @apiHeader {String} acces-token 用户token
 * @apiParam {Number} page 页索引
 * @apiParam {Number} size 分页大小
 * @apiSuccess {Number} code 结果标识
 * @apiSuccess {String} message 结果说明
 * @apiSuccess {Object} data 结果数据
 * @apiSuccessExample Success-Response:
 *     HTTP/11 200 OK
 *     {
 *       "code": 1,
 *       "mess": "成功",
 *       "data": {}
 *     }
 */ 
    {
        router:"/user/integralList",
        method:"get",
        ctrls:[ctrl.checkToken,ctrl.integralList]
    },
/**
 * @api {post} /user/modifyInfo 修改信息
 * @apiVersion 1.0.0
 * @apiName modifyInfo
 * @apiGroup User
 * @apiHeader {String} acces-token 用户token
 * @apiParam {String} username 用户名
 * @apiParam {String} nation 民族
 * @apiParam {String} wx_num 微信号
 * @apiParam {String} qq_num QQ号
 * @apiParam {Number} age 年龄
 * @apiParam {String} sex 性别
 * @apiParam {String} birthday 民族
 * @apiParam {String} education 教育程度
 * @apiParam {String} job_rank 职称
 * @apiParam {String} address 住址
 * @apiSuccess {Number} code 结果标识
 * @apiSuccess {String} message 结果说明
 * @apiSuccess {Object} data 结果数据
 * @apiSuccessExample Success-Response:
 *     HTTP/11 200 OK
 *     {
 *       "code": 1,
 *       "mess": "成功",
 *       "data": {}
 *     }
 */
    {
        router:"/user/modifyInfo",
        method:"post",
        ctrls:[ctrl.checkToken,ctrl.modifyInfo]
    },

/**
 * @api {post} /user/updatePwd 修改密码
 * @apiVersion 1.0.0
 * @apiName updatePwd
 * @apiGroup User
 * @apiHeader {String} acces-token 用户token
 * @apiParam {String} newPwd 用户的新密码
 * @apiParam {String} oldPwd 用户旧密码
 * @apiSuccess {Number} code 结果标识
 * @apiSuccess {String} message 结果说明
 * @apiSuccess {Object} data 结果数据
 * @apiSuccessExample Success-Response:
 *     HTTP/11 200 OK
 *     {
 *       "code": 1,
 *       "mess": "成功",
 *       "data": {}
 *     }
 */
    {
        router:"/user/updatePwd",
        method:"post",
        ctrls:[ctrl.checkToken,ctrl.updatePwd]
    }
]
