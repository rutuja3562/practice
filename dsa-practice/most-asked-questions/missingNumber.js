function missingNumber(array) {
  arr = array.sort((a, b) => {
    return a - b;
  });
  var n = arr[arr.length - 1];
  var totalSum = (n * (n + 1)) / 2;
  var sum = arr.reduce((acc, num) => acc + num, 0);
  return totalSum - sum;
}
var arr = [1, 2, 3, 5];
console.log(missingNumber(arr));
