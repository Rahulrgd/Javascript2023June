// javascript function also behaves like object.

function hello(){
    console.log("hello world");
}

console.log(hello.name);
hello.property = "this is the porperty of the hello funciton";
console.log(hello.property);

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "emptiness";
}
console.log(hello.prototype.sing());
