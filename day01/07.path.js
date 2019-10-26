/*
  处理路径问题的模块
 */

const { normalize, join, resolve, basename, extname, dirname, parse, format } = require('path');

// const path = normalize('./js/a.js');
// 拼接相对路径
// const path = join('./js', '../a', 'b.js');
// 拼接绝对路径
// const path = resolve('./js', '../a', 'b.js');

// const path = basename('C:\\Users\\XiongJian\\Desktop\\class0722\\class0722\\day01\\a\\b.js');
// const path = extname('C:\\Users\\XiongJian\\Desktop\\class0722\\class0722\\day01\\a\\b.js');
// const path = dirname('C:\\Users\\XiongJian\\Desktop\\class0722\\class0722\\day01\\a\\b.js');
// const path = parse('C:\\Users\\XiongJian\\Desktop\\class0722\\class0722\\day01\\a\\b.js');
const path = format({
  root: 'C:\\',
  dir: 'C:\\Users\\XiongJian\\Desktop\\class0722\\class0722\\day01\\a',
  base: 'b.js',
  ext: '.js',
  name: 'b'
});

console.log(path);
