const express = require('express');
require('./db');
const Cities = require('./models/cities');
const app = express();

app.use(express.static('public'));

app.get('/province', async (req, res) => {
  try {
    // 查找所有省份数据
    const result = await Cities.find({level: 1}, {name: 1, province: 1, _id: 0});
    // 返回成功响应
    res.json({status: 0, data: result});
  } catch (e) {
    // 返回失败响应
    console.log(e);
    res.json({status: 1, error: '网络出现故障，请刷新试试'});
  }
});

app.get('/city', async (req, res) => {
  try {
    const { province } = req.query;
    if (!province) {
      res.json({status: 1, error: '请选择省份'});
      return;
    }
    // 查找指定省份所有城市数据
    const result = await Cities.find({level: 2, province}, {name: 1, city: 1, _id: 0});
    // 返回成功响应
    res.json({status: 0, data: result});
  } catch (e) {
    // 返回失败响应
    console.log(e);
    res.json({status: 1, error: '网络出现故障，请刷新试试'});
  }
});

app.get('/county', async (req, res) => {
  try {
    const { province, city } = req.query;
    if (!province) {
      res.json({status: 1, error: '请选择省份'});
      return;
    }
    if (!city) {
      res.json({status: 1, error: '请选择城市'});
      return;
    }
    // 查找指定省份所有城市数据
    const result = await Cities.find({level: 3, province, city}, {name: 1, county: 1, _id: 0});
    // 返回成功响应
    res.json({status: 0, data: result});
  } catch (e) {
    // 返回失败响应
    console.log(e);
    res.json({status: 1, error: '网络出现故障，请刷新试试'});
  }
});

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~ http://localhost:3000');
  else console.log(err);
});