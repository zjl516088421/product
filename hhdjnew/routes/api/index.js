
let express = require('express')
let router = express.Router()
let user = require('./user')
let news = require('./news')
let upload=require('./upload')
let forum=require('./forum')
let routers = [
    ...user,
    ...news,
    ...upload,
    ...forum
]

console.log(routers)

// 添加路由
routers.forEach(r => {
    switch (r.method) {
        case 'get':
            /*if(r.ctrls[1]){*/
                router.get(r.router,...r.ctrls)
           /* }else{
                router.get(r.router,r.ctrls[0])
            }*/
            break
        case 'post':
            /*if(r.ctrls[1]){*/
                router.post(r.router,...r.ctrls)
            /*}else{
                router.post(r.router,r.ctrls[0])
            }*/
            break
    }
    
})

module.exports = router;