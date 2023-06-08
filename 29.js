// how to clone array
// how to concatinate two 
let array1 = [1,2,3];
// let array2 = array1;
// array1.shift(0);
// let array2 = array1.slice(0);
// let array2 = [].concat(array1);
// let array2 = [...array1]
// let array2 = [...array1].concat([5,6,7]);
// let array2 = [...array1, 5,6,7,8];
let array3 = [11,22,33]
let array2 = [...array1, ...array3];
array1.push(4);
console.log(array1===array2);
console.log(array1);
console.log(array2);