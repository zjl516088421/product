# 项目说明
### 插件安装
```
npm install mysql --save-dev
npm install sequelize --save-dev


npm install apidoc -g
npm install supervisor --save-dev
npm install jwt-simple --save-dev
npm install crypto --save-dev
npm install winston --save-dev
npm install express-winston --save-dev
npm install formidable --save-dev

```
### 创建数据库模型
使用sequelize-auto创建  https://github.com/sequelize/sequelize-auto

```
node build/createModels
```
### 代码生成


```
node build/createModelsExport
node build/createServices
```


### 生成api文档
apidoc -i routes/ -o public/apidoc

### 运行日志
```
```

# 项目结构
--api.js                    主入口
--routes                    路由文件夹
----api                     客户端接口
----manager                 后台管理接口
--controller                路由控制器
--service                   数据处理
--models                    数据模型文件夹
----dbManager               数据库连接配置
--upload                    文件上传存储
--util                      公用方法库
--build                     代码生成逻辑
----createModels.js         自动创建数据库模型   
----createModelsExport.js   自动创建数据库模型引用，生成index.js
----createServices          自动创建数据库模型服务类
--config        项目配置