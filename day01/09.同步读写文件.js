/*
  1. 打开文件
    fs.openSync(path, flags[, mode])
  2. 读取文件
    fs.readSync(fd, buffer, offset, length, position)
  3. 关闭文件
    fs.closeSync(fd)

  1. 打开文件
  2. 写入文件
    fs.writeSync(fd, buffer[, offset[, length[, position]]])
  3. 关闭文件
 */

const { openSync, readSync, writeSync, statSync, closeSync } = require('fs');

// 1. 打开文件
const fd = openSync('package.json', 'r');
console.log(fd);
// 首先要获取文件信息（长度）
const { size } = statSync('package.json');
// console.log(size);
// 创建buffer
const buffer = Buffer.alloc(size);
// 2. 读取文件
readSync(fd, buffer, 0, size, 0);
// 3. 关闭文件
closeSync(fd);

console.log(buffer.toString());
// 1. 打开文件
const fd_write = openSync('a.json', 'w');
console.log(fd_write);
// 2. 读取文件
writeSync(fd_write, buffer, 0, size, 0);
// 3. 关闭文件
closeSync(fd_write);
