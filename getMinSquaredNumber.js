export const getMinSquaredNumber = array => {
  if (!Array.isArray(array) || array.length <= 0) {
    return null;
  }
  return Math.min(...array.map(element => element * element));
};

console.log(getMinSquaredNumber([-777, 3, -2, 6, 45, -20])); // => 4
console.log(getMinSquaredNumber([])); // => null
console.log(getMinSquaredNumber('[-777, 3, -2, 6, 45, -20]')); // => null
