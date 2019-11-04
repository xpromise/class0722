/*
  A instanceof B
    检查A.__proto__是否在B.prototype
 */
function _instanceof(A, B) {
  A = A.__proto__;
  B = B.prototype;
  while (A) {
    if (A === B) {
      return true;
    }
    A = A.__proto__;
  }
  return false;
}