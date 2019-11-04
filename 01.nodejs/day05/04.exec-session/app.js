const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const {resolve} = require('path');
const {PORT} = require('./config');
require('./db');

const userRouter = require('./routers/user');
const uiRouter = require('./routers/ui');

/*
  解决反复重启服务器的问题：
    npm i nodemon -g
    nodemon app.js
 */
const app = express();

// 设置使用哪个模板引擎解析模板资源
// app.set('view engine', 'pug');
// 设置模板资源目录  app.set('views', 目录名称);
// app.set('views', resolve(__dirname, 'views'));

// 使用内置中间件：向外暴露静态资源
app.use(express.static(resolve(__dirname, 'public'), {extensions: ['html', 'css', 'js']}));
// 设置路由，处理请求，返回响应
app.use(express.urlencoded({extended: true}));

// 使用session中间件
app.use(session({
  secret: '8k4h4uc52qo', // 参加session_id加密
  saveUninitialized: false, // 如果session对象没有存储东西，就不创建
  resave: false, // 如果session没有变化，就不会重新存储
  store: new MongoStore({ // 储存session的数据库
    url: 'mongodb://localhost:27017/exec',
    ttl: 3600 * 24 * 7, // session存储有效期
  }),
  cookie: {
    maxAge: 7 * 24 * 3600 * 1000, // cookie的有效期
    httpOnly: true
  }
}));

// 应用路由器
app.use(uiRouter);
app.use(userRouter);

app.listen(PORT, (err) => {
  if (!err) console.log(`服务器启动成功了~, 服务器地址：http://localhost:${PORT}`);
  else console.log(err);
});
