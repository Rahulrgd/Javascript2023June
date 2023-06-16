//maps method

// const person = new Map();
// person.set('firstName', "Rahul");
// person.set('age', 23);
// console.log(person);
// console.log(person.get('firstName'));
// console.log(person.keys());

// for(let key of person.keys()){
//     console.log(key, typeof key);
// }

const person = {
    firstName: "Rahul",
    id: 1
}

const extraInfo = new Map();
extraInfo.set(person, {age: 23, gender: "male"});

console.log(extraInfo.get(person).age);
