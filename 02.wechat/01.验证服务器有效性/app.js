const express = require('express');
const sha1 = require('sha1');

const app = express();
/*
  验证服务器有消息：
    1. 在测试号管理页面添加正确的url地址（必须外网能访问的地址） 和 token
      本地 http://localhost:3000 通过内网穿透工具映射外网能访问的地址 ngrok
      ngrok http 端口号
    2. 当你点击提交按钮，会向开发者服务器发送get请求。其中携带了4个参数。
        开发者需要通过这4个参数来推导请求来自于微信服务器。
    3. 1）将token、timestamp、nonce三个参数进行字典序排序
       2）将三个参数字符串拼接成一个字符串进行sha1加密
       3）开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
 */

const config = {
  token: 'atguigu0722',
  appID: 'wxc8e92f7ab70fbca0',
  appsecret: 'b4054e90b75787c78e0af50bf7fc3e87'
};

app.use((req, res) => {
  /*
    {
      signature: '410a36f02731bc383200b3f2058ef8bacc3c5af6',
      echostr: '2216798752943890425',
      timestamp: '1572852985',
      nonce: '1296297909'
    }
   */
  // console.log(req.query);
  const { signature, echostr, timestamp, nonce } = req.query;
  const { token } = config;

  // 1）将token、timestamp、nonce三个参数进行字典序排序 sort
  const sortedArr = [token, timestamp, nonce].sort();
  // 2）将三个参数字符串拼接成一个字符串进行sha1加密
  const str = sortedArr.join('');
  const secret = sha1(str);
  // 3）开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
  if (secret === signature) {
    // 说明消息来自于微信服务器
    res.end(echostr);
  } else {
    // 消息不是微信服务器
    res.end();
  }
});

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~ http://localhost:3000');
  else console.log(err);
});