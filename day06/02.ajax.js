const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('服务器返回的响应~');
});

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~ http://localhost:3000');
  else console.log(err);
});