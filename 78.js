const userMethod = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age > 18;
    }
}

function createUser(firstName, lastName, gmail, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.gmail = gmail;
    user.age = age;
    user.address = address;
    user.about = userMethod.about;
    user.is18 = userMethod.is18;
    return user;
}

const user1 = createUser("Rahul", "Gupta", "rahul@gmail.com", "23", "House, Road no, City, State, Country");
console.log(user1);
console.log(user1.about());

