const express = require('express');
const { resolve } = require('path');
const { PORT } = require('./config');
require('./db');

const userRouter = require('./routers/user');

/*
  解决反复重启服务器的问题：
    npm i nodemon -g
    nodemon app.js
 */
const app = express();
// 使用内置中间件：向外暴露静态资源
app.use(express.static(resolve(__dirname, 'public'), {extensions: ['html', 'css', 'js']}));
// 设置路由，处理请求，返回响应
app.use(express.urlencoded({extended: true}));
// 应用路由器
app.use(userRouter);

app.listen(PORT, (err) => {
  if (!err) console.log(`服务器启动成功了~, 服务器地址：http://localhost:${PORT}`);
  else console.log(err);
});
