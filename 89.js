// inheritance in javascript 

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating.`;
    }

    isCute(){
        return this.age <= 3;
    }
}

class Dog extends Animal{
    constructor(name, age, speed){
        super(name, age);
        this.speed = speed;
    }
    // can also modify parent class function in child class function as per our need
    eat(){
        return `Modified function: ${this.name} is eating.`
    }

    run(){
        return `${this.name} can ran at the speed of ${this.speed} km/hr`
    }
}

const dog = new Dog("Bella", 4, 33);
console.log(dog.eat());
