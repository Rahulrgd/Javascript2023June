// parameter destructuring
// used lot in object and react

const person = {
    firstName: "Rahul",
    gender: "male",
    age: 23
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.age);
// }

function printDetails({firstName, gender, age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printDetails(person);