var ctrl=require('../../controllers/ForumController')
module.exports=[
 /**
 * @api {get} /forum/forumList 帖子列表
 * @apiVersion 1.0.0
 * @apiName forumList
 * @apiGroup forum
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
        router:'/forum/forumList',
        method:'get',
        ctrls:[ctrl.forumList]
    },
 /**
 * @api {get} /forum/forumDetail 帖子详情
 *  @apiVersion 1.0.0
 * @apiName forumDetail
 * @apiGroup forum
 * @apiParam {Number} forum_id 帖子id
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
        router:'/forum/forumDetail',
        method:'get',
        ctrls:[ctrl.forumDetail]
    },
     /**
 * @api {post} /forum/addForum 发布帖子
 *  @apiVersion 1.0.0
 * @apiName addForum
 * @apiGroup forum
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
        router:'/forum/addForum',
        method:'post',
        ctrls:[ctrl.checkToken,ctrl.addForum]
    },
 /**
 * @api {get} /forum/addComment 添加评论
 * @apiVersion 1.0.0
 * @apiName addComent
 * @apiGroup forum
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
        router:'/forum/addComment',
        method:'post',
        ctrls:[ctrl.checkToken,ctrl.addComment]

    },
 /**
 * @api {get} /forum/commentList 评论列表
 * @apiVersion 1.0.0
 * @apiName commentList
 * @apiGroup forum
 * @apiParam {Number} page 页索引
 * @apiParam {Number} size 分页大小
 * @apiParam {Number} forum_id 帖子id
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
        router:'/forum/commentList',
        method:'get',
        ctrls:[ctrl.commentList]
    }
]