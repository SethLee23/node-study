const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('./services/mongoose_connection');
const HTTPErrorHandler = require('./middlewares/http_error_handler');
const errorHandler = require('./middlewares/error_handler');
const winston = require('./winston_demo');
// const __dirname = path.resolve();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const helloRouter = require('./routes/helloRouter');

const app = express();

// view engine setup

// 1. 模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/helloRouter', helloRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});
// HTTP error handler
app.use(HTTPErrorHandler());

// error handler
app.use(errorHandler());
// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message; // 模板引擎渲染
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


process.on('uncaughtException', (err) => {
  winston.error(err);
});

process.on('unhandledRejection', (reason, p) => {
  winston.error('Unhandled Rejection at:', p, 'reason:', reason);
});

module.exports = app;
// 指定端口
// PORT=3000 node bin/www

// 指定环境
// NODE_ENV=production node bin/www
