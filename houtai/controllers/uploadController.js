var BaseCtrl = require('./baseController')
var formidable = require('formidable')


function UploadCtrl() {
    this.upload = (req, res, next) => {
        var form = new formidable.IncomingForm()
        form.uploadDir = './upload'  //上传文件夹
        form.multiples = true  //支持多文件
        form.keepExtensions=true  //是否包括扩展名

        form.parse(req, (err, fields, files) => {
            var file = files['img'] //上传文件名称
            console.log(fields)
            var paths = []
            if (!file) {
                res.send(this.Result(0, '没有文件'))
                return
            }
            if(file instanceof Array){
                for(var i = 0; i < file.length; i++){
                    paths.push(file[i].toJSON())
                }
            }else{
                paths.push(file.toJSON())
            }
            res.send(this.Result(1, 'success', paths))
            //可以使用fs.renameSync()重命名文件
        })
    }

}

UploadCtrl.prototype = new BaseCtrl()
module.exports = new UploadCtrl()

