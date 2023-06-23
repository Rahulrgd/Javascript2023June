// method
// function inside object

// const person = {
//     firstName: "Rahul",
//     age: 23,
//     about: function(){
//         console.log(`Person name is ${this.firstName} and age is ${this.age}`);
//     }
// }

// person.about();

// another example

const personInfo = function() {
    console.log(`Person name is ${this.firstName} and the age is ${this.age}`);
}

const person1 = {
    firstName : "Rahul",
    age : 23,
    about : personInfo
}
const person2 = {
    firstName : "Rahi",
    age : 23,
    about : personInfo
}
const person3 = {
    firstName : "Saurabh",
    age : 23,
    about : personInfo
}

person2.about();