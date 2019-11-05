/*
 用来创建Model对象的模块
 */
const mongoose = require('mongoose');

const tokensSchema = new mongoose.Schema({
  // 约束条件
  accessToken: {
    type: String,
    required: true
  },
  expiresIn: {
    type: Number,
    required: true
  }
});

const Tokens = mongoose.model('tokens', tokensSchema);
// 暴露
module.exports = Tokens;