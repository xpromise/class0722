
// 引入db
require('./db');
// 引入models
const Students = require('./models/students');

// 使用
(async () => {
  const result = await Students.create({
    name: 'damu',
    age: 38,
    sex: '女',
    hobby: ['周冬雨'],
    info: '能不能接受?'
  });
  console.log(result);
})();