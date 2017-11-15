
var Sequelize =  require('sequelize');
/* 创建数据库连接 */
var sequelize = new Sequelize("datadb","root","123",{
    host:"127.0.0.1",
    dialect:"mysql",
    underscored:true
})
/* 数据库模型名称配置及路径 */
const models=[
    {
        "name": "Branch",
        "path": "./tb_branch.js"
    },
    {
        "name": "Carousel",
        "path": "./tb_carousel.js"
    },
    {
        "name": "CommentRelation",
        "path": "./tb_comment_relation.js"
    },
    {
        "name": "CommentUser",
        "path": "./tb_comment_user.js"
    },
    {
        "name": "Coordinate",
        "path": "./tb_coordinate.js"
    },
    {
        "name": "Forum",
        "path": "./tb_forum.js"
    },
    {
        "name": "IntegralRule",
        "path": "./tb_integral_rule.js"
    },
    {
        "name": "News",
        "path": "./tb_news.js"
    },
    {
        "name": "Notice",
        "path": "./tb_notice.js"
    },
    {
        "name": "PartyStyle",
        "path": "./tb_party_style.js"
    },
    {
        "name": "Payfee",
        "path": "./tb_payfee.js"
    },
    {
        "name": "Picture",
        "path": "./tb_picture.js"
    },
    {
        "name": "Report",
        "path": "./tb_report.js"
    },
    {
        "name": "User",
        "path": "./tb_user.js"
    },
    {
        "name": "Manager",
        "path": "./user_manager.js"
    }
]
/* 数据库模型输出 */
models.forEach(item=>{
    module.exports[item.name]=require(item.path)(sequelize,Sequelize);
})

