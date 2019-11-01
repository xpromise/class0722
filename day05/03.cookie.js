const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

/*
  cookie：
    1. 是什么？
      在浏览器端存储少量数据（key-value）
      解决http协议无状态的问题
    2. 使用：
      设置
        res.cookie(key, value, options)
      获取
        app.use(cookieParser());
        req.cookies
      清除
        res.clearCookie(key)
    3. 时效性
      cookie默认是会话存储。（关闭浏览器会话就结束。结束就会自动销毁cookie）
      持久化cookie
        res.cookie('name', 'jack', { maxAge: 1000 * 3600 * 24 * 7 });  7天后过期
        res.cookie('name', 'jack', { maxAge: 1000 * 3600 * 24 * 365 * 10 });  10年，永久过期
    4. 缺点：
      1. 存储容量小： 通常同一个域名下数量只有20个左右，每个大小为4kb左右
      2. 传输流量大： 每次发送请求浏览器都会把所有cookie自动携带上
      3. 安全性低：
 */

// 使用第三方中间件：解析cookie数据，挂载到req.cookies
app.use(cookieParser());

app.get('/', (req, res) => {
  // 设置cookie
  /*res.cookie('name', 'jack', {
    maxAge: 1000 * 3600 * 24 * 7, // 有效期
    httpOnly: true // 只能在服务端获取，客户端获取不了
  });*/

  // 获取cookie
  // console.log(req.cookies); // undefined
  // console.log(req.headers.cookie);

  // 清除cookie
  res.clearCookie('name');
  // res.cookie('name', '', {maxAge: 0});

  // 返回响应
  res.send('返回响应~');
});

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~ http://localhost:3000');
  else console.log(err);
});