// arrow function  - this function does not work with arrow function


const user = {
    firstName : "Rahul",
    age : 23,
    about : () => {
        console.log(this.firstName, this.age);
    }
}

user.about();