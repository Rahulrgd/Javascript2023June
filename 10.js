// template string
let age = 23;
let firstName = "Rahul";

// result string:
// my name is Rahul and i am 23 years old.

// 1st method
// let aboutMe = "my name is " + firstName + " and i am " + age + " years old.";
// console.log(aboutMe);

// 2nd method
let aboutMe = `My name is ${firstName} and I am ${age} years old.`
console.log(aboutMe);