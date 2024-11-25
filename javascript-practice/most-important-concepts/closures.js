// CLOSURES

// A mechanism in which javascript maintains scope of some variables
// in closure scope. If the particular variables goes out of scope.

// Lexical scope: A closure gives a function access to its outer scope

// function

function outer() {
  var name = "Rutuja";
  return function inner() {
    console.log(`name: ${name}`);
  };
}
let outerFunction = outer();
outerFunction();

var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i, arr[i]);
  }, i * 1000);
}
// ans=>
// 5 undefined
// 5 undefined
// 5 undefined
// 5 undefined
// 5 undefined

var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i, arr[i]);
  }, i * 1000);
}
// ans=>
// 0 1
// 1 2
// 2 3
// 3 4
// 4 5

for (var i = 0; i < 5; i++) {
  closure(i);
}

function closure(i) {
  setTimeout(() => {
    console.log(i, arr[i]);
  }, i * 1000);
}

// ans=>
// 0 1
// 1 2
// 2 3
// 3 4
// 4 5

// IIFE

// An IIFE (Immediately Invoked Function Expression)
// is a JavaScript function that runs as soon as it is defined.

const counter = (function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      console.log("increment");
      changeBy(+1);
    },
    decrement() {
      console.log("decrement");
      changeBy(-1);
    },
    value() {
      return privateCounter;
    },
  };
})();
counter.increment();
counter.increment();
counter.increment();
console.log("1...", counter.value());
counter.decrement();
counter.decrement();
console.log("2...", counter.value());

// CURRYING
// function with multiple arguments into a sequence of functions, each taking a single argument.

function multiply1(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
console.log("CURRYING1...", multiply1(5)(2)(3));

const multiply2 = (a) => (b) => (c) => a * b * c;
console.log("CURRYING2...", multiply2(6)(2)(3));
