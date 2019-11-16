/*
  路由的配置文件
*/

import Home from '../components/home';
import Pins from '../components/pins';
import Topic from '../components/topic';
import Books from '../components/books';
import Events from '../components/events';

const routes = [{
    title: '首页',
    path: '/home',
    component: Home
  },
  {
    title: '沸点',
    path: '/pins',
    component: Pins
  },
  {
    title: '主题',
    path: '/topic',
    component: Topic
  },
  {
    title: '小册',
    path: '/books',
    component: Books
  },
  {
    title: '活动',
    path: '/events',
    component: Events
  }
];

export default routes;