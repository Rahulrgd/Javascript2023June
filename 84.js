function createUser(firstName, lastName, gmail, age, address){
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.gmail = gmail;
    user.age = age;
    user.address = address;
    // user.about = userMethod.about;
    // user.is18 = userMethod.is18;
    // user.sing = userMethod.sing;
    return user;
}

createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};

createUser.prototype.is18 = function(){
    return this.age > 18;
};

createUser.prototype.sing = function(){
    return 'emptiness';
};

const user1 = new createUser("Rahul", "Gupta", "rahul@gmail.com", "23", "House, Road no, City, State, Country");
const user2 = new createUser("Rahi", "Turkar", "rahi@gmail.com", "23", "House, Road no, City, State, Country");
const user3 = new createUser("Saurabh", "Patil", "patil@gmail.com", "23", "House, Road no, City, State, Country");
// console.log(user1);
// console.log(user1.about());
// console.log(user1.is18());

for(let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}