const user = {
    firstName : "Rahul",
    age : 23,
    about(){ // another way to declare method in object
        console.log(this.firstName, this.age);
    }
}

user.about();