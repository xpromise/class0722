// 1. 引入express框架
const express = require('express');
// 2. 创建app应用对象
const app = express();
// 3. 设置处理请求的路由
app.get('/', (req, res) => {
  // 处理请求，获取get请求的查询字符串参数
  console.log(req.query); // { username: 'aaa', password: 'bbb' }
  // 返回响应
  res.send('这是express服务器返回的响应~');
});
app.post('/', () => {

});
// 4. 监听端口号
app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功~ 请访问：http://localhost:3000  http://127.0.0.1:3000 http://192.168.18.38:3000');
  else console.log(err);
});
