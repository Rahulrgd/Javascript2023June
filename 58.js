// filter method

const numbers = [ 2,3,4,5,6,7,8];

const isEven = function(number){
    return number%2 === 0;
}

const evenNumber = numbers.filter(isEven);
console.log(evenNumber);