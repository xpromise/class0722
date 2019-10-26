/*
  commonjs： 一个规范，里面包含模块化规范。 我们通常说的commonjs指的就是commonjs模块化规范
    - 引入
      require(path)
        自定义模块：自己写的
          模块路径： 必须以 ./ 或 ../开头，否则报错 can not find module xxx
        nodejs核心模块：nodejs内置模块
        第三方模块：别人写的,通过npm安装下载
          模块路径： 直接写模块名称

          npm init -y    初始化一个package.json
          npm i xxx -S / npm i xxx  下载包到生产依赖中
          npm i xxx -D  下载包到开发依赖中
          npm i xxx -g  全局安装一个包。作为cmd指令使用，而不是require使用
          npm remove xxx

       模块路径解析：
         如果路径是./或../开头，就直接找这个路径，找到了就引入，没找到就报错  cannot find module xxx
         如果路径是 模块名。
            首先去nodejs内存中找核心模块，找不到
            就会按照module.paths一层层找node_modules, 找到了就引入，没找到就报错  cannot find module xxx
       文件扩展名可以省略： .js .json .node , nodejs解析时会自动补全
    - 暴露
      module.exports = xxx
      exports.xxx = xxx
        模块暴露的本质：module.exports指向的值

    nodejs中每一个js文件都做一个模块。每一个模块都要符合commonjs的模块化规范
 */

require('./01.helloNode');
require('fs');
require('http');
const $ = require('jquery');
console.log($);

console.log(module.paths);