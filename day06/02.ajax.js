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

app.post('/', (req, res) => {
  // console.log(req.query);
  console.log(req.body); // { username: 'jack', age: '18' }
  res.send('服务器返回的响应3333~');
});

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~ http://localhost:3000');
  else console.log(err);
});