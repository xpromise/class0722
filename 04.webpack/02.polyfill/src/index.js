// @babel/polyfill会将es6所有的兼容性都引入。但是我们可能只使用某一部分。
// 我们需要按需加载（使用了什么ES6语法，就引入相应的兼容性处理）
// import '@babel/polyfill';

const promise = new Promise((resolve) => setTimeout(resolve, 1000));

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

console.log(promise);
const p = new Person('jack', 18);
console.log(p);