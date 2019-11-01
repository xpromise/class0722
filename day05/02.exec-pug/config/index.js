/*
  区分两个环境：
    开发环境  npm start
    生产环境/上线环境 npm run build
 */
const isDev = process.env.NODE_ENV === 'development';

let PORT; // 端口号

if (isDev) {
  // 开发环境配置
  PORT = 3000;

} else {
  // 生产环境配置
  PORT = 80;

}

module.exports = {
  PORT
};
