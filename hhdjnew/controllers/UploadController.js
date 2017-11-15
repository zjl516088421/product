var BaseController=require('./BaseController')
var formidable=require('formidable')
var config=require('../config')
function UploadController(){

    this.upload=(req,res,next)=>{
        var form=new formidable.IncomingForm()
        form.uploadDir=config.uploadDir//上传文件夹
        form.multiples=true//支持多文件
        form.keepExtensions=true
        var self=this
        form.parse(req,(err,fields,files)=>{
            var files=files[config.uploadName]//上传文件名称
            var paths=[]
            if(!files){
                res.send(this.setResult(0,'没有文件'))
                return
            }
            if(files instanceof Array){
                for(var i=0;i<files.length;i++){
                    paths.push(files[i].path)
                }
            }else{
                paths.push(files.path)
            }
            res.send(this.setResult(1,'success',paths))
            //可以使用fs.renameSync()重命名文件
        })
    }
}
UploadController.prototype=new BaseController()
module.exports=new UploadController()
