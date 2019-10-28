/*
 步骤：
   1. 引入mongoose
   2. 连接数据库
   3. 创建schema对象 --> 对集合进行约束
   4. 通过schema对象创建集合 Model
   5. 通过Model对Document操作
 */

// 1. 引入mongoose
const mongoose = require('mongoose');
// 2. 连接数据库
mongoose.connect('mongodb://localhost:27017/mongoose_test', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
// 监听数据库连接是否成功
mongoose.connection.once('open', (err) => {
  if (!err) console.log('数据库连接成功~');
  else console.log(err);
});
// 3. 创建schema对象 --> 对集合进行约束
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
// 4. 通过schema对象创建集合 Model
// 'students': 集合名称（复数形式）  studentsSchema：约束对象
const Students = mongoose.model('students', studentsSchema);
// 5. 通过Model对Document操作
// 创建文档对象
const s = new Students({
  name: 'rose',
  age: 20,
  sex: '男',
  hobby: ['唱', '跳', 'rap', '篮球'],
  info: '我是时长两年半的个人练习生'
});
// 调用文档对象save方法，才能保存数据
s.save((err) => {
  if (!err) console.log('数据保存成功~');
  else console.log(err);
});