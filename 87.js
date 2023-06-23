// inheritance in javascript 

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isCute(){
        return this.age <= 3;
    }
}

class Dog extends Animal{

}

const dog = new Dog("Bella", 4);
console.log(dog.eat());