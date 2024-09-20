let num = [1, 4, 3, 4, 5, 3, 5, 2, 1, 2];
let N = num.length;

function selectionSort(num, n) {
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i; j < n; j++) {
      if (num[j] < num[minIndex]) {
        swap(num, j, minIndex);
      }
    }
  }
  return num;
}

console.log("SelectionSort...", selectionSort(num, N));

function swap(num, i, j) {
  let temp = num[i];
  num[i] = num[j];
  num[j] = temp;
}

// Time Complexity
O(N ** 2);

// Space Complexity
O(1);
