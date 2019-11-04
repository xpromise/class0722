const express = require('express');
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

app.get('/', (req, res) => {

});

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~ http://localhost:3000');
  else console.log(err);
});