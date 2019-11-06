//#region 
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
//#endregion

// 引入插件
const gulp = require('gulp');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');
const eslint = require('gulp-eslint');
const less = require('gulp-less');
const connect = require('gulp-connect');
const open = require('open');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const htmlmin = require('gulp-htmlmin');

// 注册任务
gulp.task('babel', function () {
  return gulp.src('./src/js/*.js') // 将 ./src/js/*.js  将所有js文件导入到gulp的流中（以可读流方式读取文件）
    .pipe(babel({ // 编译js：将js的高级语法编程js的低级语法（将ES6模块化语法编译成commonjs语法）
      presets: ['@babel/preset-env']
    }))
    .pipe(gulp.dest('./build/js')) // 将流中的文件输出出去
    .pipe(connect.reload());
});

gulp.task('browserify', function () {
  // 必须加return，否则会报错
  return gulp.src('build/js/index.js') // 只需导入入口js文件, 会自动分析依赖
    .pipe(browserify()) // 将Commonjs模块化语法编译成浏览器能识别语法
    .pipe(rename('built.js')) // 重命名
    .pipe(gulp.dest('./build/js'))
    .pipe(connect.reload());
});

//#region airbnb/eslint 
/*
  airbnb/eslint  https://github.com/lin-123/javascript

  下载包
    npx install-peerdeps --dev eslint-config-airbnb-base
  在package.json中加上配置：
    "eslintConfig": {
      "extends": "airbnb-base", // 继承airbnb的规则
      "rules": {
        "linebreak-style": 0, // 关闭规则
        "no-console": 0,
        "eol-last": 0
      },
      "env": {
        "browser": true  // 开启浏览器环境：支持浏览器全局变量
      },
      "globals": {
        "Promise": true // 定义另外的全局变量
      }
    }
*/
//#endregion
gulp.task('eslint', () => {
  return gulp.src('src/js/*.js') // 检查源代码
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(connect.reload());
});

gulp.task('less', function () {
  return gulp.src('./src/less/*.less')
    .pipe(less()) // 将less编译成css
    .pipe(gulp.dest('./build/css'))
    .pipe(connect.reload());
});

gulp.task('html', function () {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./build'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {

  // 自动刷新浏览器
  // 开启服务器
  connect.server({
    root: 'build', // 将当前目录资源暴露出去
    port: 3000,
    livereload: true // 自动刷新浏览器
  });

  // 打开浏览器
  open('http://localhost:3000');

  // 自动编译
  // 一旦js文件发生变化，就执行后面任务
  gulp.watch('./src/js/*.js', gulp.series(['js']));
  gulp.watch('./src/less/*.less', gulp.series(['less']));
  gulp.watch('./src/index.html', gulp.series(['html']));

})

gulp.task('uglify', function () {
  return gulp.src('build/js/built.js')
    .pipe(uglify())
    .pipe(rename('dist.min.js'))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('cssmin', function () {
  return gulp.src('./build/css/*.css')
    .pipe(concat('dist.min.css')) // 合并文件
    .pipe(cssmin()) // 压缩css
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('htmlmin', () => {
  return gulp.src('src/index.html')
    .pipe(htmlmin({
      collapseWhitespace: true, // 去除空格/换行符
      removeComments: true, // 移除注释
    }))
    .pipe(gulp.dest('dist'));
});

// 配置统一任务
gulp.task('js', gulp.series(['eslint', 'babel', 'browserify'])); // 同步执行、顺序执行
gulp.task('dev', gulp.parallel(['js', 'less', 'html'])); // 并行执行、同时执行（效率更高）
gulp.task('default', gulp.series(['dev', 'watch']));

gulp.task('js-prod', gulp.series(['js', 'uglify'])); // 同步执行、顺序执行
gulp.task('css-prod', gulp.series(['less', 'cssmin']));
gulp.task('build', gulp.parallel(['js-prod', 'css-prod', 'htmlmin'])); // 同步执行、顺序执行