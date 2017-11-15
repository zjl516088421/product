var express = require('express');
var router = express.Router();
var mongoClient = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectId;

const url = "mongodb://localhost:27017/myblog";

// 显示
router.get('/show', function (req, res, next) {

  mongoClient.connect(url,function (err,db) {
    if(err){
      console.log(err);
    }else{
      console.log("connect success");

      var c1 = db.collection("solts");

      c1.find({}).toArray(function (err, data) {
        if(err){
          console.log(err);
        }else {
          console.log("find db success");
          console.log(data)

          res.render('admin/category_list', {data: data})

        }
      });

    }
    db.close();
  });

});

router.get('/remove', function (req, res, next) {

  console.log(req.query._id);
  var id = req.query._id;

  mongoClient.connect(url,function (err,db) {
    if(err){
      console.log(err);
    }else{
      console.log("connect success");

      var c1 = db.collection("solts");

      c1.remove({_id: ObjectId(id)}, function (err, data) {
        if(err){
          console.log(err);
        }else {
          res.redirect("/admin/casts/show")
        }
      })
    }
    db.close();
  });

});

router.get('/edit', function (req, res, next) {

  console.log(req.query._id);
  var id = req.query._id;

  mongoClient.connect(url,function (err,db) {
    if(err){
      console.log(err);
    }else{
      console.log("connect success");

      var c1 = db.collection("solts");

      c1.find({_id: ObjectId(id)}).toArray(function (err, data) {
        if(err){
          console.log(err);
        }else {
          console.log(data)
          res.render('admin/category_edit', {data: data[0]})

        }
      })
    }
    db.close();
  });

});

router.post('/edit', function (req, res, next) {

  console.log(req.body);

  mongoClient.connect(url,function (err,db) {
    if(err){
      console.log(err);
    }else{
      console.log("connect success");

      var c1 = db.collection("solts");

      c1.update({_id: ObjectId(req.body.id)}, {$set: {"title": req.body.title, "solt": req.body.sort}}, function (err, data) {
        if(err){
          console.log(err);
        }else {
          res.send("更新成功! <a href='/admin/casts/show'>返回列表</a>")
        }
      })
    }
    db.close();
  });

});

router.get('/add', function (req, res, next) {
  res.render('admin/category_add')

});

router.post('/add', function (req, res, next) {
  console.log(req.body)
  mongoClient.connect(url,function (err,db) {
    if(err){
      console.log(err);
    }else{
      console.log("connect success");

      var c1 = db.collection("solts");

      c1.insert({title: req.body.title, solt: req.body.sort}, function (err, data) {
        if(err){
          console.log(err);
        }else {
          res.send("添加成功! <a href='/admin/casts/show'>返回列表</a>")
        }
      })
    }
    db.close();
  });

});



module.exports = router;