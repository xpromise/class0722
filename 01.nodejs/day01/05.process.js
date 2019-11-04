
const { argv, execArgv, execPath, cwd, nextTick } = process;

// 属性
// console.log(argv);
// console.log(execArgv);
// console.log(execPath);

// 方法
// console.log(cwd()); // C:\Users\XiongJian\Desktop\class0722\class0722\day01
// console.log(__dirname);
nextTick(() => {
  console.log(111)
});