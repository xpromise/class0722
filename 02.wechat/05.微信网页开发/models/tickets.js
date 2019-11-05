/*
 用来创建Model对象的模块
 */
const mongoose = require('mongoose');

const ticketsSchema = new mongoose.Schema({
  // 约束条件
  ticket: {
    type: String,
    required: true
  },
  expiresIn: {
    type: Number,
    required: true
  }
});

const Tickets = mongoose.model('tickets', ticketsSchema);
// 暴露
module.exports = Tickets;