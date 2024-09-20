// Promise

// In javascript Promise is an object that represent result of asynchronous operation
// and its resulting value

// Promises are more manageable to handle asynchronous operations, callbacks, and callback hells

// States of a Promise: A Promise can be in one of three states:

// 1. Pending: The initial state, neither fulfilled nor rejected. The asynchronous operation is still ongoing.
// 2. Fulfilled: The operation completed successfully, resulting in a resolved value.
// 3. Rejected: The operation failed, resulting in a reason for the failure (usually an error).

const newPromise = new Promise((resolve, reject) => {
  const success = true; // Change this to false to see rejection
  if (success) {
    resolve("Operation succeeded!");
  } else {
    reject("Operation failed!");
  }
});
myPromise
  .then((result) => {
    console.log(result); // Output: "Operation succeeded!"
  })
  .catch((error) => {
    console.error(error); // If rejected
  })
  .finally(() => {
    console.log("Promise settled."); // Always executed
  });
