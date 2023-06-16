// every method

// const numbers = [2,,4,6,8, 10];

// const ans = numbers.every((number)=>number%2 ===0);

// console.log(ans);

// more realastic example of every method
const products = [
    {productId: 1, productName: 1, price: 300},
    {productId: 2, productName: 2, price: 3200},
    {productId: 3, productName: 3, price: 500},
    {productId: 4, productName: 4, price: 1200},
];

const ans = products.every((product)=>product.price > 30000);
console.log(ans);