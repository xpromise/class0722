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