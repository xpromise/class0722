/*
 用来创建Model对象的模块
 */
const mongoose = require('mongoose');

const citiesSchema = new mongoose.Schema({
  // 约束条件
  code: String,
  province: String,
  city: String,
  county: String,
  name: String,
  level: Number
});

const Cities = mongoose.model('cities', citiesSchema);
// 暴露
module.exports = Cities;