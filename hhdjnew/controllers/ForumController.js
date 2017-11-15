var BaseController = require('./BaseController')
var models = require('../models')
var Forum = models.Forum,
    ForumView = models.ForumView,
    Comment = models.ForumComment,
    CommentView = models.ForumCommentView
function ForumController() {
    /* 帖子列表 */
    this.forumList = (req, res, next) => {
        var page = Number(req.query.page),
            size = Number(req.query.size)
        if (isNaN(page) || page < 0) {
            page = 1
        }
        if (isNaN(size) || size < 0) {
            size = 10
        }
        var self = this
        var param = {
            'limit': size,
            'offset': (page - 1) * size
        }
        Forum.findAndCountAll(param)
            .then(r => {
                res.send(self.setResult(1, 'forumList success', r))
            })
            .catch(e => {
                res.send(self.setResult(0))
            })
    }
    /* 帖子详情 */
    this.forumDetail = (req, res, next) => {
        var forum_id = req.query.forum_id
        if (!forum_id) {
            res.send(this.setResult(0, 'forum_id参数错误'))
            return
        }
        var self = this
        ForumView.find({ forum_id })
            .then(r => {
                res.send(self.setResult(1, 'forumDetail success', r))
            })
            .catch(e => {
                res.send(self.setResult(0, 'forumDetail error'))
            })

    }
    /* 添加评论 */
    this.addComment = (req, res, next) => {
        var comment = req.body.comment,
            forum_id = req.body.forum_id,
            user = req.TOKEN_USER
        if (!comment) {
            res.send(this.setResult(0, '内容空'))
            return
        }
        if (!forum_id) {
            res.send(this.setResult(0, 'forum_id 空'))
            return
        }
        var self = this
        Comment.create({ comment, forum_id, user_id: user.id })
            .then(r => {
                res.send(self.setResult(1, 'addComment success'))
            })
            .catch(r => {
                res.send(self.setResult(0, 'addComment error'))
            })

    }
    /* 发帖 */
    this.addForum = (req, res, next) => {
        var content = req.body.content,
            forum_id = req.body.forum_id,
            user = req.TOKEN_USER
        if (!content) {
            res.send(this.setResult(0, '内容空'))
            return
        }
        var self = this
        Forum.create({ content, user_id: user.id, type: 0, is_priv: 0 })
            .then(r => {
                res.send(self.setResult(1, 'addForum success'))
            })
            .catch(r => {
                res.send(self.setResult(0, 'addForum error'))
            })
    }
    /* 评论列表 */
    this.commentList = (req, res, next) => {
        var page = Number(req.query.page),
            size = Number(req.query.size)
        forum_id = req.query.forum_id
        if (isNaN(page) || page < 0) {
            page = 1
        }
        if (isNaN(size) || size < 0) {
            size = 10
        }
        if (!forum_id) {
            res.send(this.setResult(0, 'forum_id参数错误'))
            return
        }
        var self = this
        var param = {
            'limit': size,
            'offset': (page - 1) * size,
            where: { forum_id }
        }
        CommentView.findAndCountAll(param)
            .then(r => {
                res.send(self.setResult(1, 'commentList success', r))
            })
            .catch(r => {
                res.send(self.setResult(0,'commentList error'))
            })
    }
}
ForumController.prototype = new BaseController()
module.exports = new ForumController()