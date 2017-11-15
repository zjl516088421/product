var ctrl=require('../../controllers/UploadController')
module.exports=[
/**
 * @api {post} /upload 上传文件
 * @apiVersion 1.0.0
 * @apiName upload
 * @apiGroup Common
 * @apiHeader {String} acces-token 用户token
 * @apiParam {Binary} file 上传文件
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
        router:'/upload',
        method:'post',
        ctrls:[ctrl.checkToken,ctrl.upload]
    }
]
