// functions
function singHappyBirthday(){
    console.log("Happy Birthday to ........");
}

singHappyBirthday();

function addTwoNumber(num1, num2){
    return num1+num2;
}

console.log(addTwoNumber(2,7));

// even or not function

function isEven(num){
    if (num%2===0){
        return true;
    }
    return false;

}

console.log(isEven(6));

// find a number in an array
function findTheNumber(array, target){
    for(let i=0; i<array.length; i++){
        if(array[i]===target){
            return i+1; 
        }
    }
    return false;
}

console.log(findTheNumber([1,2,3,4,5,6,7], 5));