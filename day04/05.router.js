const express = require('express');
const app = express();
/*
  router 路由器： 分类管理路由/中间件，对路由/中间件进行模块化
 */
// router路由器实力对象，可以看做小型app应用对象。（有app对象部分功能，路由/中间件）
const router = new express.Router();

router.use((req, res, next) => {
  console.log(req.path);
  console.log(111);
  next();
});

router.get('/', (req, res) => {
  res.send('这是router返回响应');
});

// 应用在app上
app.use(router); // (req, res, next) => {}

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~ http://localhost:3000');
  else console.log(err);
});
