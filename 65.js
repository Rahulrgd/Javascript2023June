// splice method

const myArray = ["item1", "item2", "item3"];

// myArray.splice(1,1);
// myArray.splice(1,0,"inserted item");
myArray.splice(1,2, "inserted item1", "inserted item2");
console.log(myArray);