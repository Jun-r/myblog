var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.set('views', './views/pages');
app.set('view engine', 'jade');
// 静态资源请求路径
var path = require('path');
app.use(express.static(path.join(__dirname, 'public/')));
// 首页
app.get('/', function (req, res) {
    res.render('index', {title:'首页'});
});
// 首页
app.get('/admin/', function (req, res) {
    res.render('admin', {title:'后台首页'});
});
app.listen(port)
console.log("服务启动成功了");
