// spread operator
const array1 = [1,2,3];
const array2 = [5,6,7];

// const newArray = [...array1, array2];
// const newArray = ["abc"];
const newArray = [..."abc"];

console.log(newArray);

// spread operator in object
const obj1 = {
    key1:"value1",
    key2:"value2",
}

const obj2 = {
    key3:"value3",
    key4:"value4",
    key1:"uniqueValue"
}

const newObj ={...obj1, ...obj2}
console.log(newObj);


// new example
const obj3 = {..."abc"};
console.log(obj3);

// another example
const obj4 = {...[1,2,3,4]};
console.log(obj4);