// fetch

const URL = "https://jsonplaceholder.typicode.com/posts";

// const whatisthis = fetch(URL);
// console.log(whatisthis);

fetch(URL, {
    method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
    .then(response=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error("Something went wrong!");
        }
        // console.log(response.json());
        // return response.json();
    })
    .then(data=>{
        console.log(data);
    })