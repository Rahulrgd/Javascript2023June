// sort method

const numbers = [2,5,3,1200,9,3000];
numbers.sort((a,b)=>{
    return b-a;
});
console.log(numbers);

// another example
const userName = ["rahul", "rahi", "saurabh", "shubham", "satyendra"];
userName.sort();
console.log(userName);

// another realastic example
const product = [
    {productId: 1, productName: 1, price: 300},
    {productId: 2, productName: 2, price: 3200},
    {productId: 3, productName: 3, price: 500},
    {productId: 4, productName: 4, price: 1200},
];

product.sort((a,b)=>{
    return a.price - b.price;
})

console.log(product);