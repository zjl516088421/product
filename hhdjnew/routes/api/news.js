
let ctrl =require('../../controllers/NewsController')

module.exports=[
 /**
 * @api {get} /news/newsList 新闻列表
 * @apiVersion 1.0.0
 * @apiName newsList
 * @apiGroup news
 * @apiParam {Number} page 页索引
 * @apiParam {Number} size 分页大小
 * @apiParam {Number} type 新闻类型
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
        router:"/news/newsList",
        method:"get",
        ctrls:[ctrl.newsList]
    },
 /**
 * @api {get} /news/newsContent 新闻详情
 * @apiVersion 1.0.0
 * @apiName newsContent
 * @apiGroup news
 * @apiParam {Number} id 新闻id
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
        router:"/news/newsContent",
        method:"get",
        ctrls:[ctrl.newsContent]
    }
]
