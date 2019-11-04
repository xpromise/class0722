const express = require('express');
const { createReadStream, stat, watchFile } = require('fs');
const { resolve } = require('path');
const createEtag = require('etag');

const app = express();
/*
  缓存策略：
    1. 强制缓存
      位于响应头
      http1.1 cache-control
      http1.0 expires
        如果在强制缓存的有效期内，客户端不会发送请求，直接读取缓存

        工作流程：
          第一次：客户端发送请求请求资源。
          第二次：客户端将要发送请求，发现资源被强制缓存了，就直接读取缓存，不会发送请求
                 只有缓存失效（过期），就会重新发送请求，请求、新的资源

    2. 协商缓存
      位于响应头
        etag 文件内容唯一标识
        last-modified 文件修改时间
      位于请求头
        if-none-match（就是之前服务器返回的etag的值）
        if-modified-since（就是之前服务器返回的last-modified的值）

      工作流程：
        第一次：客户端发送请求请求资源，服务器返回资源，带上响应头
          etag
          last-modified
        客户端就会将值给存起来。
        第二次：客户端发送请求请求资源，资源的请求头就会携带上之前存储的内容
          if-none-match（就是之前服务器返回的etag的值）
          if-modified-since（就是之前服务器返回的last-modified的值）
        服务端获取请求头的值，与现在服务器最新的etag和last-modified进行对比。
        如果都没有变，就返回304。（客户端一旦接收到响应状态码是304就会自动读取缓存）
        如果有一个变了，就返回最新的资源，加上最新的etag和last-modified
 */
// app.use(express.static('public'));

app.get('/', (req, res) => {
  // 返回index.html
  const rs = createReadStream(resolve(__dirname, 'public/index.html'));
  rs.pipe(res);
});

// 强制缓存
app.get('/js/index.js', (req, res) => {
  // 设置强制缓存
  res.set('cache-control', `max-age=${86400}`);
  // 返回index.js
  const rs = createReadStream(resolve(__dirname, 'public/js/index.js'));
  rs.pipe(res);
});

// 文件内容唯一标识
let etag = '';
let lastModified = '';
// 读取文件内容
stat(resolve(__dirname, 'public/css/index.css'), function (err, stats) {
  if (!err) {
    // 将stats转换成etag的标识
    etag = createEtag(stats);
    lastModified = new Date().toGMTString();
  }
});

// 监视文件的变化，一旦文件变化就会触发后面的回调
watchFile(resolve(__dirname, 'public/css/index.css'), function (currStats, prevStats) {
  // 将stats转换成etag的标识
  etag = createEtag(currStats);
  lastModified = new Date().toGMTString();
});

// 协商缓存
app.get('/css/index.css', (req, res) => {
  // 第二次：判断etag和lastModified的值是否变化
  const ifNoneMatch = req.headers['if-none-match'];
  const ifModifiedSince = req.headers['if-modified-since'];

  if (ifNoneMatch === etag && ifModifiedSince === lastModified) {
    // 说明资源没有变化，命中协商缓存
    res.status(304).end();
    return;
  }

  // 第一次：设置协商缓存
  res.set('etag', etag);
  res.set('last-modified', lastModified);
  // 返回index.css
  const rs = createReadStream(resolve(__dirname, 'public/css/index.css'));
  rs.pipe(res);
});

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~ http://localhost:3000');
  else console.log(err);
});