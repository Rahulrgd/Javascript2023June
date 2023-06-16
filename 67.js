// Set (it is an iterable)

const numbers = new Set([1,2,3,3,2,1]);
console.log(numbers);
numbers.add(5);
for(item of numbers){
    console.log(item);
}

if(numbers.has(1)){
    console.log("1 is already present in the set");
}

const myArray = [1,2,3,3,4,5,4,5,6,8,6];
const newSet = new Set(myArray);
console.log(newSet);

let length = 0;
for(let element of newSet){
    length++;
}

console.log(length);