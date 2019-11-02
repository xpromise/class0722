/*
  用来连接数据库
 */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ajax', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connection.once('open', (err) => {
  if (!err) console.log('数据库连接成功~');
  else console.log(err);
});
// 考虑：要不要暴露内容？ 看外界要不要使用模块内部的数据