var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var winston =require('winston');
var expressWinston =require('express-winston');


var routes = require('./routes/index');
var users = require('./routes/users');
var api = require('./routes/api')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressWinston.logger({
  transports: [
    new (winston.transports.Console)({
      json: true,
      colorize: true
    }),
    new winston.transports.File({
      filename: 'logs/success.log'
    })
  ]
}));

app.use('/', routes);
/* app.use('/users', users); */
app.use('/api',api)



app.use(expressWinston.errorLogger({
  transports: [
      new winston.transports.Console({
        json: true,
        colorize: true
      }),
      new winston.transports.File({
        filename: 'logs/error.log'
      })
  ]
}));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log(404)
  //如果是接口请求地址错误
  if(/^\/api\/*/.test(req.url)){
    res.send({code:0,message:'接口地址不正确'})
    return
  }
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
//如果是接口请求地址错误
    if(/^\/api\/*/.test(req.url)){
      res.send({code:0,message:'接口内部错误'})
      return
    }
    console.log(err.message)
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
//如果是接口请求地址错误
  if(/^\/api\/*/.test(req.url)){
    res.send({code:0,message:'接口内部错误'})
    return
  }
  console.log(err.message)
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
