const express = require('express');
const Users = require('../models/users');
const regCheck = require('../middlewares/regCheck');

const router = new express.Router();

// 正则校验： 应用级中间件：复用代码
router.use(regCheck);
// 处理登录
router.post('/login', async (req, res) => {
  // 1. 获取用户提交的表单数据
  const { username, password } = req.body;

  // 3. 去数据库查找用户是否存在
  const user = await Users.findOne({username});
  if (user) {
    if (user.password === password) {
      // 登录成功， 设置cookie
      res.cookie('user', user._id, { maxAge: 1000 * 3600 * 24 * 7, httpOnly: true });
      res.redirect('/user');
    } else {
      res.render('login.pug', { passwordErr: '密码错误', username });
    }
  } else {
    res.render('login.pug', { usernameErr: '用户名不存在', username });
  }
});
// 处理注册
router.post('/register', async (req, res) => {
  // 1. 获取用户提交的表单数据
  const { username, password, email } = req.body;
  // 2. 进行数据校验
  // 3. 将查找用户有没有注册过
  const result = await Users.findOne({$or: [{username}, {email}]});
  if (result) {
    // 找到了，用户名或邮箱被注册过
    if (username === result.username) {
      res.render('register.pug', { usernameErr: '用户名被注册了~', username, email});
      return;
    }
    if (email === result.email) {
      res.render('register.pug', {emailErr: '邮箱被注册了~', username, email});
      return;
    }
  }
  // 4. 没有注册过才能保存用户数据
  await Users.create({username, password, email});
  // 5. 返回成功响应
  res.redirect('/login');
});

// 暴露出去
module.exports = router;