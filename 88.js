// inheritance in javascript 

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating and she can ran at the speed of ${this.speed} km/hr`;
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
}

const dog = new Dog("Bella", 4, 33);
console.log(dog.eat());
