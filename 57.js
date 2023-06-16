// map method

const numbers = [2,3,4,5,6];

// const square = function(number){
//     return number * number;
// }

const squareNumbers = numbers.map(number => {return number * number});

console.log(squareNumbers);

// another example
const users = [
    {firstName: "Rahul", age: 23},
    {firstName: "Rahi", age: 22},
    {firstName: "Saurabh", age: 22},
    {firstName: "Shubham", age: 23}
]

const printdetails = users.map(user => {return user.firstName;})

console.log(printdetails);