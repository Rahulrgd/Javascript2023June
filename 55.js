// function returning functions

function myFunc(){
    function returenedFunction(){
        console.log("hello from returened function");
    }
    return returenedFunction;
}

const ans = myFunc();
ans();