// // ---------------------------------------------------------------------------------

// // Pure function

// // function addTwoNumbers(a, b) {
// //   return a + b;
// // }

// // console.log(addTwoNumbers(3, 5));
// // console.log(addTwoNumbers(3, 5));
// // console.log(addTwoNumbers(3, 5));

// // test("addTwoNumbers(3, 7) == 10", addTwoNumbers(3, 7), 10);
// // test("addTwoNumbers(4, 7) == 11", addTwoNumbers(4, 7), 11);
// // test("addTwoNumbers(3, 9) == 11", addTwoNumbers(3, 9), 12);

// // ---------------------------------------------------------------------------------

// // Impure function

// // var sum = 0;
// // function addNumbers(a) {
// //   return (sum += a);
// // }

// // console.log(addNumbers(3));
// // console.log(addNumbers(3));
// // console.log(addNumbers(3));

// // ---------------------------------------------------------------------------------

// function test(testCase, a1, a2) {
//   if (JSON.stringify(a1) !== JSON.stringify(a2))
//     console.error(`FAIL: ${testCase}`);
//   else console.log(`PASS: ${testCase}`);
// }

// // ---------------------------------------------------------------------------------

// function first(a1) {
//   if (a1 === undefined) {
//     return undefined;
//   }
//   if (Array.isArray(a1) && a1.length < 1) {
//     return undefined;
//   }
//   return a1[0];
// }

// // test("test(first([]),undefined: ", first([]), undefined);
// // test("test(first([1])), 1:", first([1]), 1);
// // test("test([6, 1, 2, 3, 4]), 6:", first([6, 1, 2, 3, 4]), 6);

// // ---------------------------------------------------------------------------------

// function rest(a1) {
//   if (a1 === undefined) {
//     return [];
//   }
//   if (Array.isArray(a1) && a1.length < 1) {
//     return [];
//   }

//   return a1.slice(1);
// }

// // test("rest()==[]", rest(), []);
// // test("rest([1] === []", rest([1]), []);
// // test("rest([1, 2, 3, 4] === [2, 3, 4])", rest([1, 2, 3, 4]), [2, 3, 4]);
// // test("rest([10, 20, 30]) === [20, 30]", rest([10, 20, 30]), [20, 30]);

// // ---------------------------------------------------------------------------------

// function map(a1, fn) {
//   if (a1 == undefined) {
//     return undefined;
//   } else {
//     return a1.map(fn);
//   }
// }

// // test(
// //   "map([1, 2, 3], (x) => x * 2)===[2, 4, 6]",
// //   map([1, 2, 3], (x) => x * 2),
// //   [2, 4, 6]
// // );

// // ---------------------------------------------------------------------------------

// let ansArray = [];

// function customMap(a, cb) {
//   // base condition
//   console.log("a..", a);
//   if (a.length == 0) {
//     ansArray.length = 0;
//     return [];
//   }
//   const f = first(a);
//   const r = rest(a);

//   let ans = cb(f);
//   ansArray.push(ans);
//   if (r.length > 0) {
//     customMap(r, cb);
//   }
//   return ansArray;
// }

// function cb(f) {
//   return f * 2;
// }

// test("customMap([], cb)===[]", customMap([], cb), []);
// test("customMap([6], cb)===[12]", customMap([6], cb), [12]);
// test("customMap([10,20], cb)===[20,40]", customMap([10, 20], cb), [20, 40]);
// test(
//   "customMap([10,20,30], cb)===[20,40,60]",
//   customMap([10, 20, 30], cb),
//   [20, 40, 60]
// );
// // ---------------------------------------------------------------------------------

function customMap(a, cb) {
  // Initialize an empty array to store the results
  let ansArray = [];

  function helper(inputArray) {
    // Base condition: if the array is empty, stop recursion
    if (inputArray.length === 0) {
      return;
    }

    // Get the first element and apply the callback
    const f = first(inputArray);
    const r = rest(inputArray);
    ansArray.push(cb(f));

    // Recursively process the rest of the array
    helper(r);
  }

  // Start the recursive mapping
  helper(a);

  // Return the resulting array
  return ansArray;
}

function first(a1) {
  if (a1 === undefined || a1.length < 1) {
    return undefined;
  }
  return a1[0];
}

function rest(a1) {
  if (a1 === undefined || a1.length < 1) {
    return [];
  }
  return a1.slice(1);
}

function cb(f) {
  return f * 2;
}

// Test function
function test(testCase, a1, a2) {
  if (JSON.stringify(a1) !== JSON.stringify(a2))
    console.error(`FAIL: ${testCase}`);
  else console.log(`PASS: ${testCase}`);
}

// Test cases
test("customMap([], cb)===[]", customMap([], cb), []);
test("customMap([6], cb)===[12]", customMap([6], cb), [12]);
test("customMap([10,20], cb)===[20,40]", customMap([10, 20], cb), [20, 40]);
test(
  "customMap([10,20,30], cb)===[20,40,60]",
  customMap([10, 20, 30], cb),
  [20, 40, 60]
);

function digitAdd(number) {
  let sum = 0;
  while (number > 0) {
    sum += number % 10; // Get the last digit
    number = Math.floor(number / 10); // Remove the last digit
  }
  return sum;
}

test("digitAdd(12345)===15", digitAdd(12345), 15);
