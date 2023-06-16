//important array methods

// forEach 
// map
// filter
// reduce

// const numbers = [2,3,4,5,6];

// function myFunc(number, index){
//     console.log(`index is ${index} and number is ${number}`);
// }

// numbers.forEach(myFunc);

// another example
const users = [
    {firstName: "Rahul", age: 23},
    {firstName: "Rahi", age: 22},
    {firstName: "Saurabh", age: 22},
    {firstName: "Shubham", age: 23}
]

users.forEach(function(user){
    console.log(user.firstName);
})