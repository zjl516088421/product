/**
 * Created by zhangjinlei on 17/10/9.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('home/index')

});

module.exports = router;