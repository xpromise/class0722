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
  // 需要登录才能访问
  const { user } = req.cookies;
  if (!user) return res.status(401).render('401.pug');
  const result = await Users.findOne({_id: user});
  if (!result) return res.clearCookie('user').status(401).render('401.pug');
  res.render('user.pug', {username: result.username});
});

module.exports = router;