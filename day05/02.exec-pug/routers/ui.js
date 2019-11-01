const express = require('express');

const router = new express.Router();

router.get('/login', (req, res) => {
  // 将数据渲染到模板页面pug上，并将pug渲染成html页面，将最后html返回
  res.render('login.pug', {});
});

router.get('/register', (req, res) => {
  // 将数据渲染到模板页面pug上，并将pug渲染成html页面，将最后html返回
  res.render('register.pug', {});
});

module.exports = router;