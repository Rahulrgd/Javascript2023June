

// const user = {
//     firstName : "Rahul",
//     lastName : "Gupta",
//     gmail : "ragul@gmail.com",
//     age : 23,
//     address: "House, Road no, City, State, Country",
//     about: function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18: function(){
//         return this.age > 18;
//     }
// }

// console.log(user.about());

function createUser(firstName, lastName, gmail, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.gmail = gmail;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    user.is18 = function(){
        return this.age > 18;
    }
    return user;
}

const user1 = createUser("Rahul", "Gupta", "rahul@gmail.com", "23", "House, Road no, City, State, Country");
console.log(user1);