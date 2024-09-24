// var
// Function-scoped : 1. variables declares with var are accessible within the function where they declared.
// 2. If they declares outside of function they become global scope
// 3. hoisting is done at the top of there function or global scope.
// It is creates the memory and stored the value as undefined.
// and after code execution it initialized actual value.
// 4. You can redeclare a variable

function example() {
  console.log(x); // undefined (due to hoisting)
  var x = 10;
  console.log(x); // 10
}
example();

var y = 20;
var y = 30; // No error
console.log(y); // 30

// Let
// Block scope:
// 1. Variables declared with let keywords have block scope including loops and conditionals.
// 2. Hoisting is done at the top of there block scope.
// 3. cannot be accessed before their declaration
// 4. You cannot redeclare a variable declared with let in the same scope but you can reassign.

// *** Use let when you need a variable that can change value.

{
  let a = 5;
  console.log(a); // 5
}
console.log(a); // ReferenceError: a is not defined

let b = 10;
// let b = 20; // SyntaxError: Identifier 'b' has already been declared

// Const

// Block scope:
// 1. Variables declared with const keywords have block scope including loops and conditionals.
// 2. Hoisting is done at the top of there block scope.
// 3. cannot be accessed before their declaration
// 4. You cannot redeclare or reassign a variable declared with let in the same scope.

// **** Use const for constants or variables that should not be reassigned, particularly for objects and arrays.

const PI = 3.14;
// PI = 3.14159; // TypeError: Assignment to constant variable.

const arr = [1, 2, 3];
arr.push(4); // Allowed
console.log(arr); // [1, 2, 3, 4]
// arr = [5, 6, 7]; // TypeError: Assignment to constant variable.

// ------------------------------------------------------------------------------------------------------------
// |  Feature           |   var                | Let                           | Const                        |
// ------------------------------------------------------------------------------------------------------------
// |                    |                      |                               |                              |
// | Scope              |   Function           |  Block                        | Block                        |
// |                    |                      |                               |                              |
// ------------------------------------------------------------------------------------------------------------
// |                    |                      |                               |                              |
// | Hoisting           | Yes, initialized to  | Yes, but can not be accessed  | Yes, but can not be accessed |
// |                    |     undefined        |     before declaration        |      before declaration      |
// |                    |                      |                               |                              |
// ------------------------------------------------------------------------------------------------------------
// |                    |                      |                               |                              |
// | Redeclaration      |  Allowed             |   Not allowed                 | Not allowed                  |
// |                    |                      |                               |                              |
// ------------------------------------------------------------------------------------------------------------
// | Reassignment       |  Allowed             |      Allowed                  | Not allowed                  |
// |                    |                      |                               |                              |
// |                    |                      |                               |                              |
// ------------------------------------------------------------------------------------------------------------
