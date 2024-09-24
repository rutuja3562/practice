// Array.prototype.myCustomFlatMap = function (callback) {
//   // Create a new array to store the results
//   const result = [];

//   // Iterate over each element in the array (this refers to the current array)
//   for (let i = 0; i < this.length; i++) {
//     // Apply the callback to each element and store the result
//     const mappedValue = callback(this[i], i, this);

//     // If the result is an array, concatenate it (flatten by one level)
//     if (Array.isArray(mappedValue)) {
//       result.push(...mappedValue); // Spread syntax to flatten one level
//     } else {
//       // Otherwise, just push the element itself
//       result.push(mappedValue);
//     }
//   }

//   // Return the new flattened array
//   return result;
// };

// // Example usage:
// const numbers = [1, 2, 3];

// // Using custom flatMap
// const result = numbers.myCustomFlatMap((num) => [num, num * 2]);

// console.log(result); // Output: [1, 2, 2, 4, 3, 6]
