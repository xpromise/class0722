/*
  1. 打开文件
    fs.open(path, flags[, mode], callback)
  2. 读取文件
    fs.read(fd, buffer, offset, length, position, callback)
  3. 关闭文件
    fs.close(fd)

  1. 打开文件
  2. 写入文件
    fs.write(fd, buffer[, offset[, length[, position]]], callback)
  3. 关闭文件
 */
const { open, stat, read, write, close } = require('fs');
const { promisify } = require('util');
// 1. 打开文件
/*open('package.json', 'r', (err, fd) => {
  // 错误优先：回调函数的第一个参数 error
  if (!err) {
    console.log('异步打开文件成功');
    stat('package.json', (err, { size }) => {
      if (!err) {
        console.log('异步获取文件信息成功');
        // 创建Buffer
        const buffer = Buffer.alloc(size);
        // 2. 读取文件
        read(fd, buffer, 0, size, 0, (err) => {
          if (!err) {
            console.log('文件读取成功');
            // 3. 打开新文件
            open('b.json', 'w', (err, fd) => {
              if (!err) {
                console.log('打开新文件成功');
                // 4. 写入文件
                write(fd, buffer, 0, size, 0, (err) => {
                  if (!err) {
                    console.log('文件写入成功');
                  } else {
                    console.log('文件写入失败', err);
                  }
                  close(fd, (err) => {
                    if (!err) {
                      console.log('文件关闭成功');
                    } else {
                      console.log('文件关闭失败', err);
                    }
                  })
                })
              } else {
                console.log('打开新文件失败', err);
              }
            })
          } else {
            console.log('文件读取失败', err);
          }
          // 关闭读取文件
          close(fd, (err) => {
            if (!err) {
              console.log('文件关闭成功');
            } else {
              console.log('文件关闭失败', err);
            }
          })
        })
      } else {
        console.log('异步获取文件信息失败', err);
      }
    });
  } else {
    console.log('异步打开文件失败', err);
  }
});*/

/*
const openAsync = (path, flags) => new Promise((resolve, reject) => {
  open(path, flags, (err, fd) => {
    if (!err) resolve(fd);
    else reject(err);
  })
});
const statAsync = () => new Promise((resolve, reject) => {
  stat('package.json', (err, { size }) => {
    if (!err) resolve(size);
    else reject(err);
  })
});
const readAsync = (fd, buffer, size) => new Promise((resolve, reject) => {
  read(fd, buffer, 0, size, 0, (err) => {
    if (!err) resolve();
    else reject(err);
  })
});
const writeAsync = (fd, buffer, size) => new Promise((resolve, reject) => {
  write(fd, buffer, 0, size, 0, (err) => {
    if (!err) resolve();
    else reject(err);
  })
});
const closeAsync = (fd) => new Promise((resolve, reject) => {
  close(fd, (err) => {
    if (!err) resolve();
    else reject(err);
  })
});
*/

const openAsync = promisify(open);
const statAsync = promisify(stat);
const readAsync = promisify(read);
const writeAsync = promisify(write);
const closeAsync = promisify(close);
(async () => {
  try {
    const fd = await openAsync('package.json', 'r');
    const { size } = await statAsync('package.json');
    const buffer = Buffer.alloc(size);
    await readAsync(fd, buffer, 0, size, 0);
    await closeAsync(fd);
    const fd_write = await openAsync('c.json', 'w');
    await writeAsync(fd_write, buffer, 0, size, 0);
    await closeAsync(fd_write);
  } catch (e) {
    console.log(e);
  }
})()
  /*.catch((err) => {
    console.log(err);
  })*/

