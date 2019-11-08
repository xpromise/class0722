import showMsg from './module1';
import add from './module2';

import '../css/test1.css';
import '../css/test2.css';

showMsg();
add(1, 2);

if (module.hot) {
  // 说明开启了HMR功能
  module.hot.accept('./module1.js', function () {
    showMsg();
  })

  module.hot.accept('./module2.js', function () {
    console.log(add(1, 2));
  })
}