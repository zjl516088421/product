var express = require('express');
var router = express.Router();

var ctrl =require('../controllers/userController')


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

router.post('/userLogin', ctrl.userLogin);


/**
 * @api {post} /user/updatePwd 修改密码
 * @apiVersion 1.0.0
 * @apiName updatePwd
 * @apiGroup User
 * @apiParam {String} newpwd 新密码
 * @apiParam {String} oldpwd 老密码
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

router.post('/updatePwd', ctrl.checkToken, ctrl.updatePwd);


/**
 * @api {get} /user/userDetail 用户详情
 * @apiVersion 1.0.0
 * @apiName userDetail
 * @apiGroup User
 * @apiHeader {String} acces-token 用户token
 * @apiSuccess {Number} code 结果标识
 * @apiSuccess {String} message 结果说明
 * @apiSuccess {Object} data 用户详情
 * @apiSuccessExample Success-Response:
 *     HTTP/11 200 OK
 *     {
 *       "code": 1,
 *       "mess": "成功",
 *       "data": {}
 *     }
 */

router.get('/userDetail', ctrl.checkToken, ctrl.userDetail);


/**
 * @api {post} /user/modifyInfo 用户信息修改
 * @apiVersion 1.0.0
 * @apiName modifyInfo
 * @apiGroup User
 * @apiHeader {String} acces-token 用户token
 * @apiSuccess {Number} code 结果标识
 * @apiSuccess {String} message 结果说明
 * @apiSuccess {Object} data 用户详情
 * @apiSuccessExample Success-Response:
 *     HTTP/11 200 OK
 *     {
 *       "code": 1,
 *       "mess": "成功",
 *       "data": {}
 *     }
 */

router.post('/modifyInfo', ctrl.checkToken, ctrl.modifyInfo);


/**
 * @api {get} /user/integralList 用户积分
 * @apiVersion 1.0.0
 * @apiName integralList
 * @apiGroup User
 * @apiHeader {String} acces-token 用户token
 * @apiParam {Number} page 页索引
 * @apiParam {Number} size 分页大小
 * @apiSuccess {Number} code 结果标识
 * @apiSuccess {String} message 结果说明
 * @apiSuccess {Object} data 积分详情
 * @apiSuccessExample Success-Response:
 *     HTTP/11 200 OK
 *     {
 *       "code": 1,
 *       "mess": "成功",
 *       "data": {}
 *     }
 */

router.get('/integralList', ctrl.checkToken, ctrl.integralList);




module.exports = router;
