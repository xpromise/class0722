/*
  nodejs的核心模块 http
    http:
      服务器： 接受请求，处理请求，返回响应
      客户端： 发送请求，接受响应
 */
const http = require('http');

// 创建服务
const server = http.createServer((request, response) => {
  /*
    处理请求的函数, 返回响应
      request 请求信息：客户端发送给服务器的内容
      response 响应信息：服务器要返回给客户端的内容
   */
  if (request.url === '/favicon.ico') {
    // 返回空响应
    response.end();
    return;
  }

  /*
    map 返回新数组。新数组长度不变（和原数组长度一样），但是里面的值往往会变化
      如果将来返回值：长度不变，值需要变化
    filter 返回新数组。新数组长度往往会减少，但是里面的值和原来的值一样
      如果将来返回值：长度需要变，值不变
    reduce
      如果将来返回值：长度和值都需要变
   */
  // /user?username=aaa&password=bbb
  // ["username=aaa", "password=bbb"]
  const querystring = request.url.split('?')[1].split('&').reduce((previous, current) => {
    /*
      previous, 代表上一次遍历的返回值，初始值为reduce的第二个参数值
      current， 代表当前遍历数组元素的值
     */
    const [key, value] = current.split('=');
    previous[key] = value;
    return previous;
  }, {});

  // 查询字符串： 以?开头，key=value形式。多个key/value用&连接
  console.log(querystring); // { username: 'aaa', password: 'bbb' }

  response.setHeader('content-type', 'text/plain;charset=utf8');
  // 返回响应
  response.end('这是服务器返回的响应');
});

// 监听端口号
server.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功~ 请访问：http://localhost:3000');
  else console.log(err);
});