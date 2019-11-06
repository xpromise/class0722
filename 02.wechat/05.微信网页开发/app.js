const express = require('express');
const sha1 = require('sha1');
const { resolve } = require('path');
const { port, appID, url } = require('./config');
const verify = require('./middlewares/verify');
require('./db');
const fetchTicket = require('./wechat/ticket');

const app = express();

app.get('/search', async (req, res) => {
  // 生成timestamp, 单位s
  const timestamp = Math.round(Date.now() / 1000);
  // 生成随机数
  const nonceStr = Number(Math.random().toString().slice(2)).toString(32);
  // ticket
  const { ticket } = await fetchTicket();
  const searchUrl = `${url}/search`;
  /*
    参与签名的字段包括noncestr（随机字符串）, 有效的jsapi_ticket, timestamp（时间戳）, url（当前网页的URL，不包含#及其后面部分） 。
    对所有待签名参数按照字段名的ASCII 码从小到大排序（字典序）后，
    使用URL键值对的格式（即key1=value1&key2=value2…）拼接成字符串string1。这里需要注意的是所有参数名均为小写字符。
    对string1作sha1加密，字段名和字段值都采用原始值，不进行URL 转义。
   */
  // 生成微信加密签名
  const signature = sha1([
    `timestamp=${timestamp}`,
    `noncestr=${nonceStr}`,
    `jsapi_ticket=${ticket}`,
    `url=${searchUrl}`
  ].sort().join('&'));

  // 返回一个页面
  res.render('index.pug', {
    appId: appID,
    timestamp,
    nonceStr,
    signature,
    url
  });
});

app.get('/share', async (req, res) => {
  res.sendFile(resolve(__dirname, 'views/share.html'));
});

app.use(verify);

app.listen(port, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
});