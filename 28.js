// premitive vs reference data type

let num1 = 6;
let num2 = num1;

console.log(num1);
console.log(num2);
num1++;
console.log(num1);
console.log(num2);

// reference type
// array
let array1 = ["item1", "item2"];
let array2 = array1;
console.log(array1);
console.log(array2);
array1.push("item3");
console.log("after item3 in array1");
console.log(array1);
console.log(array2);
