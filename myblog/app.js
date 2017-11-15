var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var session = require("express-session");


// 前台界面
var index = require('./routes/home/index');
var post = require('./routes/home/post');


// 后台界面
var admin = require('./routes/admin/admin');
var casts = require('./routes/admin/casts');
var posts = require('./routes/admin/posts');
var login = require('./routes/admin/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html',require('ejs').__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/home')));
app.use(express.static(path.join(__dirname, 'public/admin')));

app.use(session({
  secret: "blog",
  resave: true,
  rolling: true,
  saveUninitialized: true,
  cookie: {maxAge:1000*60*5}
}))

// 前台界面
app.use('/', index);
app.use('/post', post);


// 后台界面
app.use('/admin/index', checkLogin);
app.use('/admin/index', admin);
app.use('/admin/casts', checkLogin);
app.use('/admin/casts', casts);
app.use('/admin/posts', checkLogin);
app.use('/admin/posts', posts);

app.use('/admin/users', login);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // var err = new Error('Not Found');
  // err.status = 404;
  // next(err);


  res.status(404).redirect('/admin/index');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// 编写中间件 判断用户是否登录
function checkLogin(req, res, next) {
  console.log(req.session.isLogin)
  if (!req.session.isLogin) {
    res.redirect("/admin/users/login")
  }
  next();
}

module.exports = app;
