// callback function
// simply means, calling a function with the help of another function

function func2(name){
    // const name = "Rahi";
    console.log("inside my func2");
    console.log(`my name is ${name}`);
}

function func1(a){
    console.log("hello from function 1");
    const name = "Rahul";
    a(name);
}

func1(func2);