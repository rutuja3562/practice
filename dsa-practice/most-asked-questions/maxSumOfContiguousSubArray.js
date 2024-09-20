// Kadane's Algorithm or maximum sum ofContiguousSubArray
function kadaneAlgorithm(arr) {
  var currSum = arr[0];
  var globalMax = arr[0];
  for (var i = 1; i < arr.length; i++) {
    currSum = Math.max(arr[i], currSum + arr[i]);
    if (currSum > globalMax) {
      globalMax = currSum;
    }
  }
  return globalMax;
}
var arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("KadaneAlgorithm...", kadaneAlgorithm(arr));

// Time complexity O(N);
// space complexity O(1)
