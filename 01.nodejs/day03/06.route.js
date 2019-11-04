const express = require('express');
const { resolve } = require('path');
const app = express();
/*
  路由：
    1. 是什么？
      一个用来定义请求路径和处理请求、返回响应的技术
      一个key/value的映射关系, key是path请求路径，value是处理请求回调函数
    2. 作用：
      定义请求地址
      处理请求、返回响应
    3. 组成：
       请求方式  GET POST PUT DELETE
       请求地址/路径
        '/aaa' --> http://localhost:3000/aaa  一对一
        '/hotel/:id' -->  http://localhost:3000/hotel/任意地址  一对多
        /^\/food\/(2[0-9]{2}|300)$/  -->  http://localhost:3000/food/200 一对多
      回调函数：
        request 请求信息：
          request.query 查询字符串参数
          request.params 地址栏params参数
          request.body 请求体参数（默认不解析，需要使用中间件解析）
          request.headers 请求头信息
        response 响应信息
          response.send() 返回响应，根据响应内容的类型，添加响应的响应头（content-type），再返回响应
          response.end() 返回响应，快速返回响应（响应内容不做任何处理，直接返回响应）。
          response.json() 返回响应。将响应数据转换成json返回。
          response.download() 返回响应，客户端会直接下载
          response.sendFile() 返回响应，客户端会打开展示
          response.redirect() 返回响应，重定向

          response.status() 设置响应状态码
          response.set() 设置响应头
*/
app.get('/aaa', (req, res) => {
  // console.log(req.headers);

  // res.send({name: 'jack', age: 18});
  // res.json({name: 'jack', age: 18});
  // res.download('./04.form.html');
  // res.status(404);
  // res.set('xxx', 'yyy');
  // res.sendFile(resolve(__dirname, './04.form.html'));
  res.redirect('http://www.atguigu.com');
});

app.post('/aaa', (req, res) => {
  res.send('返回响应aaa post~');
});

app.get('/hotel/:id', (req, res) => {
  console.log(req.params);

  res.send('返回响应~');
});

app.get(/^\/food\/(2[0-9]{2}|300)$/, (req, res) => {
  console.log(req.params);

  res.send('返回响应~');
});

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功~ http://localhost:3000');
  else console.log(err);
})