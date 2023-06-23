// how to use call(), apply(), bind

const user1 = {
    firstName : "Rahul",
    age : 23,
    about : function(hobby, game){
        console.log(this.firstName, this.age, hobby, game);
    }
}
const user2 = {
    firstName : "Rahi",
    age : 23,
}

// using call function
user1.about.call(user2, "video games", "ffcc");
// using apply function
user1.about.apply(user2, ["video games", "ffcc"]);

// bind returns a function, and we can use is like this:
const func = user1.about.bind(user2, "video games", "ffcc");
func();
