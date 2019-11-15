const express = require('express');

const app = express();

app.get('/search/repositories', (req, res) => {
  const {
    q,
    sort
  } = req.query;

  if (!q || !sort) {
    res.status(401).send('缺少请求参数');
    return;
  }
  // 解决跨域
  res.set('access-control-allow-origin', '*');

  res.json({
    items: [{
      html_url: 'https://github.com/axios/axios',
      name: 'axios'
    }]
  });
})

app.listen(80, (err) => {
  if (!err) console.log('服务器启动成功');
  else console.log(err);
});