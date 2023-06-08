// object destructuring
const obj1 = {key1:"value1", key2:"value2", key3:"value3", key4:"value4"};

// const key1 = obj1.key1;
// const key2 = obj1.key2;
// console.log(key1);
// console.log(key2);


// another way
const{key1, key2, ...restprops} = obj1;
console.log(key1);
console.log(key2);
console.log(restprops)

