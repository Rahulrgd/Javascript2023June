// rest parameter
function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`a is ${b}`);
    console.log(`a is ${c}`);
}

myFunc(1,2,3,4,5,6,7);

function addAll(...numbers){
    console.log(numbers);
    console.log(Array.isArray(numbers));
    let total = 0;
    for(number in numbers){
        total = total + numbers[number];
    }
    console.log(numbers.length);
    console.log(total);
}

addAll(3,4,5,6,7);