const express = require('express');
const { resolve } = require('path');
const app = express();

/*
  中间件 middleware
    1. 是什么？
      本质上一个函数
    2. 作用：
      修改req和res对象: 同一个请求中，所有中间件和路由共享同一个req和res
      执行任意代码
      处理请求，返回响应
      调用下一个中间件/路由
    3. 执行顺序：
      当请求进来服务器时，会从上到下依次执行路由/中间件。
        如果遇到中间件，就立即执行，如果调用了next方法，就在执行下一个，如果没有，就请求到此终止
        如果遇到路由，看当前请求的请求方式和请求路径是否匹配上，如果匹配上就执行，如果没有匹配上，就看下一个
        如果都没有，返回404
   4. 应用场景：
      应用级中间件
        提取路由重复代码到中间件中（进行代码复用）。
        防盗链、权限检验等。。
      内置中间件
        express内置的中间件
          express.static(文件目录)
          express.urlencoded({extended: true})
      错误处理中间件
        app.use((err, req, res, next) => {})
      路由器中间件
        router 用来分类管理 route
      第三方中间件
        cookie-parser 解析cookie数据
 */

// 将public文件夹下面的资源全部向外暴露出去: 向外暴露静态资源
app.use(express.static(resolve(__dirname, 'public')));
// 用来解析请求体参数，挂在req.body上
app.use(express.urlencoded({extended: true}));

/*app.use((req, res, next) => {
  console.log(111);
  // req.body = { a: 123 };
  // res.send('返回响应111~'); // 不能返回多次响应（返回响应应该在代码的最后面）
  // next();
});

app.get('/', (req, res) => {
  res.send('路由返回响应111');
});

app.get('/', (req, res) => {
  res.send('路由返回响应222');
});

app.use((req, res, next) => {
  console.log(222);
  // console.log(req.body);
  res.send('返回响应222~');
});

app.use((req, res, next) => {
  console.log(333);
  res.send('返回响应~');
});*/
// 应用级中间件
/*app.use((req, res, next) => {
  console.log(req.headers.referer); // 请求来源地址
  const safe = ['http://localhost:3000', 'http://localhost:63342'];
  const { referer } = req.headers;
  // 防盗链
  // if (safe.filter((url) => !referer.startsWith(url)).length === 1) {
  if (!safe.some((url) => referer.startsWith(url))) {
    res.status(403).end();
    return;
  }
  next();
});

app.use((req, res, next) => {
  console.log(111);
  next();
  console.log(222);
});

app.use((req, res, next) => {
  console.log(333);
  next();
  console.log(444);
});

app.use((req, res, next) => {
  console.log(555);
  next();
  console.log(666);
});*/

app.use((req, res) => {
  // { username: 'admin', password: 'admin' }
  console.log(req.body); // undefined 默认情况下请求体参数不解析
  res.send('返回响应');
});

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功 http://localhost:3000');
  else console.log(err);
});