
const { createReadStream, createWriteStream } = require('fs');
// 创建可读流
const rs = createReadStream('C:\\Users\\XiongJian\\Desktop\\02.复习.avi');
// 创建可写流
const ws = createWriteStream('a.avi');

// 可读流创建出来是paused状态。只有内部chunk被消费，才会切换成flowing状态
rs.pipe(ws);