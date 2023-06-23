// static method and properties
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    static staticFunction(){
        return "Static function called by directly Class name not the object name";
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
        
    }
    eat(){
        return `Modified function: ${this.name} is eating.`
    }

    run(){
        return `${this.name} can ran at the speed of ${this.speed} km/hr`
    }
}

const info = Person.staticFunction();
console.log(info);