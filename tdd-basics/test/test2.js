// Pure function
// function addTwoNumbers(a, b) {
//   return a + b;
// }

// // Impure function
// var sum = 0;
// function addNumbers(a) {
//   return (sum += a);
// }

// // Helper functions
// function first(a1) {
//   if (a1 === undefined) {
//     return undefined;
//   }
//   if (Array.isArray(a1) && a1.length < 1) {
//     return undefined;
//   }
//   return a1[0];
// }

// function rest(a1) {
//   if (a1 === undefined) {
//     return [];
//   }
//   if (Array.isArray(a1) && a1.length < 1) {
//     return [];
//   }
//   return a1.slice(1);
// }

// function map(a1, fn) {
//   if (a1 == undefined) {
//     return undefined;
//   } else {
//     return a1.map(fn);
//   }
// }

// let ansArray = [];

// function customMap(a, cb) {
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

// // Custom test function
// function test(testCase, actual, expected) {
//   const actualStr = JSON.stringify(actual);
//   const expectedStr = JSON.stringify(expected);

//   if (actualStr !== expectedStr) {
//     console.error(
//       `FAIL: ${testCase}\nExpected: ${expectedStr}\nReceived: ${actualStr}\n`
//     );
//   } else {
//     console.log(`PASS: ${testCase}`);
//   }
// }

// // Running Manual Tests
// test("addTwoNumbers(3, 7) == 10", addTwoNumbers(3, 7), 10);
// test("addTwoNumbers(4, 7) == 11", addTwoNumbers(4, 7), 11);
// test("first([]) === undefined", first([]), undefined);
// test("first([1]) === 1", first([1]), 1);
// test("rest([1, 2, 3, 4]) === [2, 3, 4]", rest([1, 2, 3, 4]), [2, 3, 4]);
// test(
//   "map([1, 2, 3], x => x * 2) === [2, 4, 6]",
//   map([1, 2, 3], (x) => x * 2),
//   [2, 4, 6]
// );
// test("customMap([], cb) === []", customMap([], cb), []);
// // test("customMap([10, 20], cb) === [20, 40]", customMap([10, 20], cb), [20, 40]);
// test(
//   "customMap([10, 20, 30], cb) === [20, 40, 60]",
//   customMap([10, 20, 30], cb),
//   [20, 40, 60]
// );
