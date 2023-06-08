// objects inside array
// very useful in realworld application

const users = [
    {userID:1, name:"Rahul", age:22},
    {userID:2, name:"Rahi", age:23},
    {userID:3, name:"Shubham", age:24}
]

for(let user of users){
    console.log(user.name);
}