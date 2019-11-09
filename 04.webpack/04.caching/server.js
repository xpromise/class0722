const express = require('express');
const app = express();

app.use(express.static('build', {
  maxAge: 1000 * 3600 * 24
}));

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功~');
  else console.log(err);
})