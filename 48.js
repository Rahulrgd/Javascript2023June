// function inside function

const outerFunc = () => {
    const innerFunction = () => {
        console.log("Inner Function!");
    }
    console.log("Outer Function!");
    innerFunction();
}

outerFunc();