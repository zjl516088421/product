var express = require('express');
var router = express.Router();

router.get('/show', function (req, res, next) {
  res.render('admin/article_list')

});

router.get('/add', function (req, res, next) {
  res.render('admin/article_add')

});

module.exports = router;