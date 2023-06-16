// hoisting

function hello(){
    console.log("hello world!");
}

hello();

// does not works with function expression

hello2(); // calling function before expressing it

const hello2 = () => {console.log("hello2!");}
