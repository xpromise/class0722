// 创建服务器
const http = require('http');

const SocketIo = require('socket.io');
// 创建服务器的代码
const server = http.createServer();
// 创建web socket通信的代码
const io = new SocketIo(server);

// 建立起客户端和服务器连接
io.on('connection', (socket) => {
  // socket 就是连接上服务端的客户端
  console.log('客户端连接上了服务端');
  socket.join('room 1');
  // 绑定事件接收客户端的消息
  socket.on('client_to_server', (msg) => {
    console.log('服务器接收到客户端的消息', msg);
    // 服务器接收到消息后，返回一个消息给客户端
    // socket.emit('server_to_client', '今天下雨了，真烦');
    io.to('room 1').emit('server_to_client', msg);
  })
});

// 启动服务器的代码
server.listen(3000, () => console.log('服务器启动成功了~'));