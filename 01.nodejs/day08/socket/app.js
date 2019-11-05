// 创建socket服务
const http = require('http');
const socketIo = require('socket.io');
const server = http.createServer();
// 服务器连接对象
const io = socketIo(server);

// 接受客户端连接
io.on('connection', function (socket) {
  // socket: 客户端连接对象

  // 接受客户端向服务端发送的消息
  socket.on('client_to_server', function (msg) {
    console.log(msg);
    // 客户端也能向其他客户端发送消息
    // 给所有人包括自己发送消息
    // socket.emit('server_to_client', msg); 
    // 给除了自己以外的其他人发送消息
    socket.broadcast.emit('server_to_client', msg); 
  })
})

server.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功~');
  else console.log(err);
})

