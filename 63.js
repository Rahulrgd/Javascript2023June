// some method

// const numbers = [2,3,4,5,6];

// const ans = numbers.some((number)=>number%2 === 0);
// console.log(ans);

// more realastic example

const products = [
    {productId: 1, productName: 1, price: 300},
    {productId: 2, productName: 2, price: 32000},
    {productId: 3, productName: 3, price: 500},
    {productId: 4, productName: 4, price: 1200},
];

const ans = products.some((product)=>product.price > 30000);
console.log(ans);