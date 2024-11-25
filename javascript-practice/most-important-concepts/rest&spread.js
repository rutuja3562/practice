// 1. Rest Operator (...)
// Rest operator is used to collect multiple elements into single array or object.
// Rest in Function Arguments
// When used in function parameters, the rest operator collects the "rest" of the
// arguments into an array.

function sum(...numbers) {
  console.log("numbers", numbers); //[1,2,3] [4,5]
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5)); // 9

// Rest in Array Destructuring
// In array destructuring, the rest operator can collect the remaining
// items into a new array.

const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first); // 10
console.log(second); // 20
console.log(rest); // [30, 40, 50]

// 2. Spread Operator (...)

// The spread operator is used to expand elements of an iterable
// (like arrays, strings, or objects) into individual elements.

//  It's useful for copying or merging arrays/objects and passing
// multiple elements as arguments to functions.

// Spread in Arrays
// The spread operator can expand an array into individual elements.

const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Spread the elements of arr1 into arr2
console.log(arr2); // [1, 2, 3]

// Merging Arrays:

const arr11 = [1, 2, 3];
const arr22 = [4, 5, 6];
const mergedArr = [...arr11, ...arr22]; // Merge both arrays
console.log(mergedArr); // [1, 2, 3, 4, 5, 6]

// Differences Between Rest and Spread

// Rest (...): Used to collect multiple elements into a single array or object.
// Spread (...): Used to expand elements of an array or object into individual elements or properties.

// Rest: Gathers multiple elements into an array or object.
// Spread: Spreads out elements from an array or object.
