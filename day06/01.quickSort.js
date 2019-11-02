
const arr = [9, 2, 1, 4, 3, 20, 5, 8];

/*function quickSort(arr) {
  const length = arr.length;
  // 退出递归的条件
  if (length <= 1) return arr;

  // 基准值下标
  const index = Math.floor(length / 2);
  // 创建一个新数组：目的是不想修改原数组
  const newArr = [...arr];
  // 基准值
  const value = newArr.splice(index, 1)[0];

  // 遍历。小左大右
  const left = [];
  const right = [];

  newArr.forEach((item) => {
    if (item < value) {
      left.push(item);
    } else {
      right.push(item);
    }
  });

  // 对左边再来一遍
  const newLeft = quickSort(left);
  // 对右边再来一遍
  const newRight = quickSort(right);
  // 将左边 + 基准值 + 右边
  const result = newLeft.concat(value, newRight);

  return result;
}*/

function quickSort(arr, left = [], right = []) {
  if (arr.length <= 1) return arr;
  const newArr = [...arr];
  const value = newArr.splice(Math.floor(arr.length / 2), 1)[0];
  newArr.forEach((item) => item < value ? left.push(item) : right.push(item));
  return quickSort(left).concat(value, quickSort(right));
}

console.log(quickSort(arr));