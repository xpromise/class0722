/*
  获取access_token:
    官方文档：https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Get_access_token.html
    1. 是什么？
      是公众号的全局唯一接口调用凭据，公众号调用各接口时都需使用access_token。
    2. 特点：
      大小至少512个字符
      有效期目前为2个小时
      重复获取将导致上次获取的access_token失效。
   3. 请求信息：
      - 请求方式 get
      - 请求地址 https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
      - 请求参数：
        grant_type client_credential
        appid
        secret
   4. 设计：
      第一次：发送请求，获取access_token，持久化存储到数据库中（access_token, expires_in）
      第二次：从数据库中读取access_token，判断有没有过期
        没有过期  直接使用
        过期了，重新请求，获取access_token，持久化存储到数据库中（access_token, expires_in）
   5. 整理：
      先判断数据库中有没有（access_token, expires_in）
        有
          判断有没有过期
            没有过期  直接使用
            过期了，重新请求，获取access_token，持久化存储到数据库中（access_token, expires_in）
        没有
          发送请求，获取access_token，持久化存储到数据库中（access_token, expires_in）
 */
// 引入数据库为了测试
require('../db');

const request = require('request-promise-native');
const Tickets = require('../models/tickets');
const fetchAccessToken = require('./access-token');

async function fetchTickets() {
  const ticket = await Tickets.findOne({}, {_id: 0, __v: 0});
  if (ticket && ticket.expiresIn > Date.now()) {
    return ticket;
  }
  return await getTicket();
}

async function getTicket() {
  const { accessToken } = await fetchAccessToken();

  let result = await request({
    method: 'GET',  // 请求方式
    json: true,  // 自动装换json
    url: `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${accessToken}&type=jsapi` // 请求地址
  });
  // 修改过期时间: 提前5分钟刷新
  result = {
    ticket: result.ticket,
    expiresIn: result.expires_in
  };

  result.expires_in = Date.now() + 7200 * 1000 - 5 * 60 * 1000;
  // 存储到数据库中
  const ticket = await Tickets.findOne({});

  if (ticket) {
    await Tickets.updateOne({}, {$set: result});
  } else {
    await Tickets.create(result);
  }
  // 返回出去
  return result;
}

module.exports = fetchTickets;