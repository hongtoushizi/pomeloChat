'use strict';

var express = require('express');
var path = require('path');
var compress = require('compression');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
//var users = require('./routes/users');
var app = express();
var session = require('express-session');
var https = require('https');
var http = require('http');
var fs = require('fs');
var heapdump = require('heapdump'); // 加载chrome的分析工具
var crypto = require('crypto');

//添加异常判断，因为nodejs是单线程，防止某段程序错误，导致整个线程死掉，而导致node服务崩溃。
process.on('uncaughtException', function (e) {
    console.log(new Date().toString(), e.stack || e);
    process.exit(1);
});
//app.use(compress());
//app.use(session({secret: 'sessionId', cookie: {maxAge: 24 * 60 * 60 * 1000}}));
app.set('port', process.env.PORT || 3000);
//app.set('views', path.join(__dirname, 'views'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/img',express.static(path.join(__dirname, 'public/img'), {maxAge: 86400000}));
app.use('/js',express.static(path.join(__dirname, 'public/js'), {maxAge: 86400000}));


app.use('/', routes);

//app.get('/', function (req, res) {
//    res.send('Hello   oooo  World')
//})

//var router = express.Router();
//router.route(index);

//app.get('/', function(req, res) {
//    console.log("aaabbbb----");
//    res.render('home/index');
//});

//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req,res) {

    var err = new Error('Not Found');
    console.log("404------");
    err.status = 404;
    res.render("404", {});
});

if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.log("服务请求错误了");
    //res.render('error', {
    //    message: err.message,
    //    error: {}
    //});
});

//在每个请求中都返回user的session 信息。
app.use(function (req, res, next) {
    res.locals.user = req.session.user;
    next();
});

app.use(function (req, res, next) {
    res.locals.user = req.session.user;
    var err = req.session.error;
    delete req.session.error;
    res.locals.message = '';
    if (err) res.locals.message = '<div class="alert alert-error">' + err + '</div>';
    next();
});
console.log("Web server has started.\nPlease log on http://127.0.0.1:3000/index.html");
app.listen(3000);

//http://www.phonegap100.com/athreadinfo_4699.html
//https.globalAgent.maxSockets = 100;
//http.globalAgent.maxSockets = 100;
//
//http.createServer(app).listen(8080,function(){
//    console.log("listen 8080, please log on http://localost");
//});
//https.createServer(options, app).listen(3001,function(){
//    console.log("https listen on 3001");
//});


