const express = require('express');
const { resolve } = require('path');
require('./db');
const Users = require('./models/users');

const app = express();
// 使用内置中间件：向外暴露静态资源
app.use(express.static(resolve(__dirname, 'public')));
// 设置路由，处理请求，返回响应
app.use(express.urlencoded({extended: true}));
// 正则校验： 应用级中间件：复用代码
app.use((req, res, next) => {
  const { username, password, rePassword, email } = req.body;
  // 2. 正则校验
  const usernameReg = /^\w{5,15}$/;
  const passwordReg = /^\w{5,20}$/;
  const emailReg = /^\w{3,10}@\w{2,5}\.com$/;

  const isRegister = req.path === '/register';

  // 进行校验
  if (!usernameReg.test(username)) {
    res.send('用户名不符合规范');
    return;
  }
  if (!passwordReg.test(password)) {
    res.send('密码不符合规范');
    return;
  }
  if (isRegister && !emailReg.test(email)) {
    res.send('邮箱不符合规范');
    return;
  }
  if (isRegister && password !== rePassword) {
    res.send('两次密码输入不一致，请重新输入');
    return;
  }
  // 正则校验通过
  next();
});
// 处理登录
app.post('/login', async (req, res) => {
  // 1. 获取用户提交的表单数据
  const { username, password } = req.body;

  // 3. 去数据库查找用户是否存在
  const user = await Users.findOne({username});
  if (user) {
    if (user.password === password) {
      res.send('登录成功~');
    } else {
      res.send('密码错误');
    }
  } else {
    res.send('用户名不存在~');
  }
});
// 处理注册
app.post('/register', async (req, res) => {
  // 1. 获取用户提交的表单数据
  const { username, password, email } = req.body;
  // 2. 进行数据校验
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
  res.redirect('/login.html');
});

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
});
