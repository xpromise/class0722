/*
  1. 初始化package  npm init -y
  2. 下载包
    npm i gulp-cli -g
    npm i gulp -D
  3. 新建文件（名称固定） gulpfile.js  是gulp的配置文件，当你运行gulp指令会读取的配置文件   

  4. 写gulp的配置
    - gulp的插件网找插件 https://gulpjs.com/plugins/
    - 打开插件文档看使用
    - 下载包/引入包
    - 配置任务
    - 运行任务  gulp 任务名称

*/

// 引入插件
const gulp = require('gulp');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');

// 注册任务
gulp.task('babel', function () {
  return gulp.src('./src/js/*.js') // 将 ./src/js/*.js  将所有js文件导入到gulp的流中（以可读流方式读取文件）
    .pipe(babel({ // 编译js：将js的高级语法编程js的低级语法（将ES6模块化语法编译成commonjs语法）
      presets: ['@babel/preset-env']
    }))
    .pipe(gulp.dest('./build/js')) // 将流中的文件输出出去
});

gulp.task('browserify', function () {
  // 必须加return，否则会报错
  return gulp.src('build/js/index.js')
    .pipe(browserify()) // 将Commonjs模块化语法编译成浏览器能识别语法
    .pipe(rename('built.js')) // 重命名
    .pipe(gulp.dest('./build/js'))
});

// 配置统一任务
gulp.task('default', gulp.series(['babel', 'browserify'])); // 同步执行、顺序执行
// gulp.task('default', gulp.parallel(['babel', 'browserify'])); // 并行执行、同时执行（效率更高）