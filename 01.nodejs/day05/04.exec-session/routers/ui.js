const express = require('express');
const cookieParser = require('cookie-parser');
const Users = require('../models/users');

const router = new express.Router();

router.get('/login', (req, res) => {
  // 将数据渲染到模板页面pug上，并将pug渲染成html页面，将最后html返回
  res.render('login.pug', {});
});

router.get('/register', (req, res) => {
  // 将数据渲染到模板页面pug上，并将pug渲染成html页面，将最后html返回
  res.render('register.pug', {});
});

router.get('/user', cookieParser(), async (req, res) => {
  // session中间件，会自动解析cookie，得到加密后的session_id，进行解密。将解密后的session_id去数据库中找session对象。
  // 将找到的session对象挂在到req.session上
  const { username } = req.session;
  if (!username) return res.status(401).render('401.pug');
  res.render('user.pug', {username});
});

module.exports = router;