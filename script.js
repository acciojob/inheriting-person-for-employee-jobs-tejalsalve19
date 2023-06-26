// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// greet method added to Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
}

// Employee constructor function inheriting from Person
function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // Call the Person constructor with the appropriate context
  this.jobTitle = jobTitle;
}

// Inherit the Person prototype methods
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// jobGreet method added to Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
