const express = require('express');
const app = express();

app.use(express.static('public'));
// 只能解析post请求的urlencoded编码的参数
app.use(express.urlencoded({extended: true}));
// 只能解析post请求的json编码的参数
app.use(express.json());

app.get('/', (req, res) => {
  console.log(req.query); // { username: 'jack', age: '18' }
  res.status(500).send('服务器返回的响应3333~');
});

app.get('/jsonp', (req, res) => {
  // 获取函数名称
  const { callback } = req.query;
  // 定义数据
  const data = {name: 'jack', age: 18};
  // 返回响应
  res.send(`${callback}(${JSON.stringify(data)})`); // fn({name: 'jack', age: 18})
});

app.get('/cors', (req, res) => {
  /*
    cors：官方的解决方案
    特点：
      1. 可以发任意请求
      2. 兼容性稍差
   */
  /*
    Access-Control-Allow-Credentials: true
      允许预检请求：浏览器当发现你当前请求是一个特殊请求（POST/PUT/DELETE或者包含特殊请求头字段），就会发送一个预检请求。
      预检请求的请求方式是options。
      预检请求作用就是检查当前请求是否可以跨域。如果不可以跨域，后面不发请求了。如果跨域跨域，后面的请求才会发送过去
    Access-Control-Allow-Headers: X-Juejin-Src,X-Juejin-Uid,X-Juejin-Client,X-Juejin-Token
      允许哪些请求头可以跨域
    Access-Control-Allow-Methods: GET, PUT, POST, DELETE, HEAD
      允许哪些请求方式可以跨域
    Access-Control-Allow-Origin: https://juejin.im
      允许哪些请求来源地址可以跨域
    Access-Control-Max-Age: 86400
      预检请求结果的缓存时间
   */
  // res.set('access-control-allow-origin', '*');
  // res.set('access-control-allow-origin', 'http://localhost:63342');
  const safe = ['http://localhost:63342'];
  const url = safe.find((url) => req.referer.startsWith(url));
  if (url) {
    res.set('access-control-allow-origin', url);
    res.set('Access-Control-Allow-Headers', 'X-Juejin-Src,X-Juejin-Uid,X-Juejin-Client,X-Juejin-Token');
    // 返回响应
    res.send('这是cors的响应');
  } else {
    res.end();
  }
});

app.post('/', (req, res) => {
  // console.log(req.query);
  console.log(req.body); // { username: 'jack', age: '18' }
  res.send('服务器返回的响应3333~');
});

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~ http://localhost:3000');
  else console.log(err);
});