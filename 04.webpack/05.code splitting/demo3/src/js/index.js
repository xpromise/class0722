// ES10 动态导入js --> 用来代码分割
import('./module1')
  .then(({
    default: module1
  }) => {
    module1.showMsg();
  })
  .catch((err) => {
    console.log(err);
  })

function add(x, y) {
  return x + y;
}

console.log(add(1, 2));