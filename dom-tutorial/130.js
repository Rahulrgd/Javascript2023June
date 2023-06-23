console.log("script start");

// for(let i=0; i<=100000; i++){
//     console.log("inside for loop");
// }

function hello(){
    console.log("hello");
}
const id = setTimeout(hello, 0);

for(let i=0; i<100; i++){
    console.log(".....");
}

console.log("settimeout id is ", id);
console.log("clearing time out ");
clearTimeout(id);

console.log("scritp end");