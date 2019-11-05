const express = require('express');
const { resolve } = require('path');
require('./socket');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.post('/login', (req, res) => {
  const { username } = req.body;
  res.cookie('username', username, {maxAge: 1000 * 3600 * 24});
  res.redirect('/chat.html');
});

app.listen(4000, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
});

