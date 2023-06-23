// class keywork

class CreateUser{
    constructor(firstName, lastName, gmail, age, address){
        const user = Object.create(createUser.prototype);
        user.firstName = firstName;
        user.lastName = lastName;
        user.gmail = gmail;
        user.age = age;
        user.address = address;
    }
     
    about(){
            return `${this.firstName} is ${this.age} years old.`;
        }

    is18(){
            return this.age > 18;
        }
    string1(){
            return 'emptiness';
        }
    
    
}