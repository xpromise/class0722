const express = require('express');
require('./db');
const Users = require('./models/users');

const app = express();

// 设置路由，处理请求，返回响应

// 处理登录
app.get('/login', (req, res) => {

});
// 处理注册
app.get('/register', async (req, res) => {
  // 1. 获取用户提交的表单数据
  const { username, password, rePassword, email } = req.query;
  // 2. 进行数据校验
  // 定义正则
  const usernameReg = /^\w{5,15}$/;
  const passwordReg = /^\w{5,20}$/;
  const emailReg = /^\w{3,10}@\w{2,5}\.com$/;
  // 进行校验
  if (!usernameReg.test(username)) {
    res.send('用户名不符合规范');
    return;
  }
  if (!passwordReg.test(password)) {
    res.send('密码不符合规范');
    return;
  }
  if (!emailReg.test(email)) {
    res.send('邮箱不符合规范');
    return;
  }
  if (password !== rePassword) {
    res.send('两次密码输入不一致，请重新输入');
    return;
  }
  // 3. 将查找用户有没有注册过
  const result = await Users.findOne({$or: [{username}, {email}]});
  if (result) {
    // 找到了，用户名或邮箱被注册过
    if (username === result.username) {
      res.send('用户名被注册了~');
      return;
    }
    if (email === result.email) {
      res.send('邮箱被注册了~');
      return;
    }
  }
  // 4. 没有注册过才能保存用户数据
  await Users.create({username, password, email});
  // 5. 返回成功响应
  res.send('注册成功~');
});

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
});