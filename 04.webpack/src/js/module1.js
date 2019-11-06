const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('延时1秒执行了~');
    resolve('aaa');
  }, 1000)
})

export default promise;