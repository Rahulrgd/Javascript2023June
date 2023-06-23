// function myFunc(callback){
//     console.log("Function is doing task 1");
//     callback();
// }

// function myFunc2(){
//     console.log("Function is doing task 2");
// }


// myFunc(myFunc2);

function getTwoNumberAndAdd(number1, number2, callback){
    console.log(number1, number2);
    callback(number1, number2);
}

function addTwoNumber(num1, num2){
    console.log(num1+num2);
}

getTwoNumberAndAdd(4,5, addTwoNumber);