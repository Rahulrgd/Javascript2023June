// nested destructuring
const users = [
    {userID:1, name:"Rahul", age:22},
    {userID:2, name:"Rahi", age:23},
    {userID:3, name:"Shubham", age:24}
]
// const[user1, user2, user3] = users;
const[{name: user1FirstName}, , {age}] = users;
console.log(user1FirstName, age);