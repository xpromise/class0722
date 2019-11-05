const express = require('express');
const { port } = require('./config');
const verify = require('./middlewares/verify');
require('./db');

const app = express();

app.use(verify);

app.listen(port, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
});