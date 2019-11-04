const express = require('express');
const { port } = require('./config');
const wechat = require('./middlewares/wechat');
const app = express();

app.use(wechat);

app.listen(port, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
});