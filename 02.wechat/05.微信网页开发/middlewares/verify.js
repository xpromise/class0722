const sha1 = require('sha1');
const { token } = require('../config');

module.exports = (req, res) => {
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
};