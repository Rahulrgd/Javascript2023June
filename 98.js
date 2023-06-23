// clousers
// function outerFunction(){
//     function innerFunction(){
//         console.log("inner function");
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// console.log(ans());

// another example

function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }

    return printName;
}

const ans = printFullName("Rahul", "Gupta");
ans();