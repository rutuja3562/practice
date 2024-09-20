// Bubble sort

let num = [1, 4, 3, 4, 5, 3, 5, 2, 1, 2];
let N = num.length;
function bubbleSort(num, N) {
  var n = 0;
  num.forEach((element) => {
    n++;
  });

  for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - 1 - i; j++) {
      if (num[j] > num[j + 1]) {
        swap(num, j, j + 1);
      }
    }
  }
  return num;
}

console.log("bubbleSort...", bubbleSort(num, N));

function swap(num, i, j) {
  let temp = num[i];
  num[i] = num[j];
  num[j] = temp;
}

// Time complexity
O(N ** 2);

// space complexity
O(1);
