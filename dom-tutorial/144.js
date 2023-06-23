console.log("Script Start");

const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL)
//     .then(response => response.json())
//     .then(data => console.log(data))

async function getPosts(){
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error("Something went wrong!!");
    }
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    return data;
}

// const myData = getPosts();
// console.log(myData);
getPosts()
    .then(myData=>console.log(myData))
    .catch(error=>console.log(error))

    console.log("Script End");