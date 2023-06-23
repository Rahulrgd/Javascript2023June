function myFunction(number){
    return function(power){
        return number ** power;
    }
}

const ans = myFunction(3);
console.log(ans(2));