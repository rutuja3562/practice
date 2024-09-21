// Call: The call() method invokes a function with a given this value
// and arguments provided one by one
// The call() method invokes a function with a given this value and arguments provided one by one
var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?

var std1 = {
  firstName: "Kunal",
  lastName: "Patil",
};
var std2 = {
  firstName: "Yash",
  lastName: "Patil",
};

function invite(greet1, greet2) {
  console.log(
    greet1 + " " + this.firstName + " " + this.lastName + ", " + greet2
  );
}
invite.call(std1, "Hello", "How are you?");
invite.call(std2, "Hello", "How are you?");

// Apply : It invokes the function with given this values, and allows you to pass arguments as an array

var std1 = {
  firstName: "Rushabh",
  lastName: "Rathod",
};

var std2 = {
  firstName: "Abhi",
  lastName: "Yadav",
};

function invite(greet1, greet2) {
  console.log(
    greet1 + " " + this.firstName + " " + this.lastName + ", " + greet2
  );
}
invite.apply(std1, ["Hello", "How are you?"]);
invite.apply(std2, ["Hello", "How are you?"]);

// Bind :returns new function, allowing you to pass any number of arguments

var std1 = {
  firstName: "Saurabh",
  lastName: "Patil",
};

var std2 = {
  firstName: "Jay",
  lastName: "Pawar",
};

function invite(greet1, greet2) {
  console.log(
    greet1 + " " + this.firstName + " " + this.lastName + ", " + greet2
  );
}

inviteStd1 = invite.bind(std1);
inviteStd2 = invite.bind(std2);
inviteStd1("Hello", "How are you?");
inviteStd2("Hello", "How, are you?");
