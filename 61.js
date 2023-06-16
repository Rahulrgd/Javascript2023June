// find method in array

const myArray = ["hello", "cat", "rahul", "rahi"];

function isLength3(string){
    return string.length === 3;
}

const element = myArray.find(isLength3);
console.log(element);

// more realastic example
const users = [
    {userId: 1, userName: "Rahul"},
    {userId: 2, userName: "Rahi"},
    {userId: 3, userName: "Saurab"},
    {userId: 4, userName: "Shubham"},
]

const myUser = users.find((user)=>user.userId === 3);
console.log(myUser);