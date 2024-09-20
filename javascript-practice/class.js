// Class: A blueprint for creating objects (instances).
// Constructor: A special method to initialize new instances.
// Methods: Functions defined inside a class that can be called on instances.
// Inheritance: Classes can inherit from other classes using extends.
// Static Methods: Methods that belong to the class rather than instances.

class Student {
  constructor(name, rollNumber) {
    (this.name = name), (this.rollNumber = rollNumber);
  }
  describeJob() {
    console.log(`${this.name}'s roll number is ${this.rollNumber}.`);
    // return `${this.name}'s roll number is ${this.rollNumber}.`;
  }
}
let student1 = new Student("Aarna", 101);
student1.describeJob();
// let desc = student1.describeJob();
// console.log("desc...", desc);
console.log("student1", student1);
