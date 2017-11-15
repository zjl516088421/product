var News = require('../models').News
var BaseController = require('./BaseController')


function NewsController(){
    /* 新闻列表 */
   this.newsList=(req,res,next)=>{
        var page=Number(req.query.page),
            size=Number(req.query.size)
            type=Number(req.query.type)
        if(isNaN(page)||page<0){
            page=1
        }
        if(isNaN(size)||size<0){
            size=10
        }
        if(isNaN(type)||type<0){
            res.send(this.setResult(0,'type参数错误'))
            return
        }
        var self=this
        var param = {
            'limit': size,
            'offset': (page - 1) * size,
            attributes:{exclude:['content']},
             where: { type }
        }
        News.findAndCountAll(param)
        .then(r=>{
            res.send(self.setResult(1,'success',r))
        })
        .catch(r=>{
            res.send(self.setResult(0))
        })
           
   }
   /* 新闻详情 */
   this.newsContent=(req,res,next)=>{
        var id=Number(req.query.id)
        if(isNaN(id)){
            res.send(this.setResult(0,'id 错误'))
            return
        }
        var self=this
        News.find({news_id:id})
        .then(r => {
            res.send(self.setResult(1, ' success', r))
        })
        .catch(e => {
            res.send(self.setResult(0, ' error'))
        })
   }
}
NewsController.prototype=new BaseController()
module.exports = new NewsController()