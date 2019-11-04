/*
 用来创建Model对象的模块
 */
const mongoose = require('mongoose');

const studentsSchema = new mongoose.Schema({
  // 约束条件
  name: {
    type: String,
    unique: true, // 唯一的
    required: true, // 必须的
  },
  age: {
    type: Number,
    min: 18,
    max: 60
  },
  sex: String,
  hobby: [String], // 数组，数组里面放字符串
  info: mongoose.SchemaTypes.Mixed, // 混合，任意数据类型
  createTime: {
    type: Date,
    default: Date.now
  }
});

const Students = mongoose.model('students', studentsSchema);
// 暴露
module.exports = Students;