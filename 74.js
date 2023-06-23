const user = {
    firstName : "Rahul",
    age : 23,
    about: function(){
        console.log(this.firstName, this.age);
    }
}

// user.about();
const func = user.about.bind(user);
func();