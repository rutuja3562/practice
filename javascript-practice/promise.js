// Promise

// In javascript Promise is an object that represent result of asynchronous operation
// and its resulting value

// Promises are used to handle asynchronous operations. They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.

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

newPromise
  .then((result) => {
    console.log(result); // Output: "Operation succeeded!"
  })
  .catch((error) => {
    console.error(error); // If rejected
  })
  .finally(() => {
    console.log("Promise settled."); // Always executed
  });

function sleep(time) {
  return new Promise((resolve, reject) => {
    if (typeof time !== "number") return reject("Time must be in number");
    setTimeout(() => {
      resolve();
    }, time);
  });
}

sleep("2000")
  .then((res) => console.log("Time is in number"))
  .catch((err) => {
    console.log("error...", err);
  });

function sleep1(time) {
  return new Promise((resolve, reject) => {
    if (typeof time !== "number") {
      return reject({ status: 400, message: "Axios error" });
    }
    setTimeout(() => {
      resolve({ status: 200 });
    }, time);
  });
}

async function text() {
  console.log("Waiting for responce");
  try {
    const res = await sleep1(3000);
    console.log("res...", res);
  } catch (error) {
    console.log("error...", error);
  }
}
text();

// Callback function
// A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an action.
// Let's take a simple example of how to use callback function.

function callbackFunction(name) {
  console.log("Hello " + name);
}

function outerFunction(callback) {
  let name = "Rutuja Patil";
  callback(name);
}

outerFunction(callbackFunction);
