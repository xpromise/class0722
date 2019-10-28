const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongoose_test', { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.once('open', (err) => {
  if (!err) console.log('数据库连接成功~');
  else console.log(err);
});
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
/*
  Model的CRUD
    Model.create(文档对象[, 回调函数])
    Model.find(查询条件[, 投影[, 回调函数]])  返回值找没找到是一个数组
    Model.findOne(查询条件[, 投影[, 回调函数]])  返回值找到了是一个对象，没找到是一个null
    Model.updateOne(查询条件, 更新内容[, 回调函数])
    Model.updateMany(查询条件, 更新内容[, 回调函数])
    Model.deleteOne(查询条件[, 回调函数])
    Model.deleteMany(查询条件[, 回调函数])
 */
(async () => {
  try {
    /*const result = await Students.create({
      name: 'jerry',
      age: 22,
      sex: '男',
      hobby: ['tom'],
      info: '你来追我啊，追我就给你hhh'
    });*/

    // const result = await Students.find({age: {$gte: 20}}, {age: 1, _id: 0});
    // const result = await Students.findOne({age: {$gte: 20}});
    // const result = await Students.updateMany({}, {$inc: {age: 1}});
    const result = await Students.deleteOne({name: '20'});
    console.log(result);
  } catch (e) {
    console.log(e);
  }
})();