const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr);

xhr.open("GET", URL);

// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         // console.log(xhr.response);
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(data);
//     }
// }

xhr.onload = function(){
    console.log(xhr.readyState);
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}

xhr.send();