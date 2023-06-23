// laxical scope
const myVar = "value3";

function outerFunction() {
    const myVar = "value2";
    function InnerFunction(){
        const myVar = "value1";
        console.log(myVar);
    }
    InnerFunction();
}

outerFunction();
