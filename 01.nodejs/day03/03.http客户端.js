/*
  http.request(url[, options][, callback])
  http.request(options[, callback])
 */
const http = require('http');

// 设置请求信息
/*const req = http.request({
  hostname: 'localhost', // 主机域名
  port: 3000, // 端口号
  path: '/?username=111&password=222', // 请求路径
  method: 'GET', // 请求方式
  headers: { // 请求头信息

  }
}, function (res) {
  // 接受响应的回调函数
  // res相当于可读流
  res.on('data', (chunk) => {
    console.log(`响应主体: ${chunk}`);
  });
  res.on('end', () => {
    console.log('响应中已无数据');
  });
});*/
// 设置请求信息
const req = http.request('http://localhost:3000?username=111&password=222', {
  method: 'GET', // 请求方式
  headers: { // 请求头信息

  }
}, function (res) {
  // 接受响应的回调函数
  // res相当于可读流
  res.on('data', (chunk) => {
    console.log(`响应主体: ${chunk}`);
  });
  res.on('end', () => {
    console.log('响应中已无数据');
  });
});

// 写入请求的数据
// req.write();
// 发送请求
req.end();