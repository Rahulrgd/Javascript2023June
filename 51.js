// default parameter

// function addTwo(a,b){
//     return a+b;
// }

// const ans = addTwo(2); // b is undefined here

// to solve this problem

function addTwo(a,b=0){
    return a+b;
}
const ans = addTwo(3);
console.log(ans);