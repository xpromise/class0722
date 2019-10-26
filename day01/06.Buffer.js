

const buffer1 = Buffer.alloc(10);
// buffer1[0] = 12;
// buffer1[1] = 13;
console.log(buffer1);

/*
  00 - ff
  0 - 255
  00000000 - 11111111

  utf-8编码中： 一个英文占一个字节  一个中文占三个字节

  1 bit
  1 byte = 8 bit
  1 kb = 1024 byte  --> 2^10
  1 mb = 1024 kb
 */
const buffer2 = Buffer.allocUnsafe(10);
console.log(buffer2);

// 将字符串转换成二进制存储在buffer中
// const buffer3 = Buffer.from('atguigu');
const buffer3 = Buffer.from('尚硅谷');
console.log(buffer3);
// 将buffer中二进制转换成字符串
console.log(buffer3.toString());