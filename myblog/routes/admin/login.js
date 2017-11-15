var express = require('express');
var router = express.Router();

router.use('/login', checkNotLogin);

router.get('/login', function (req, res, next) {
  res.render('admin/login');

});

router.get('/logout', function (req, res, next) {
  req.session.isLogin = null;
  res.redirect('/admin/index');

});

router.post('/signin', function (req, res, next) {
  console.log(req.body);
  req.session.isLogin = true
  res.redirect("/admin/index")

});

function checkNotLogin(req, res, next) {
  if (req.session.isLogin) {
    res.redirect('/admin/index');
  }
  next();
}

module.exports = router;