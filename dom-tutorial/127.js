// const body = document.body;
// body.addEventListener("keypress", (e)=>{
//     console.log(e.key);
// })

const body = document.body;

const mainButton = document.querySelector(".btn-headline");
mainButton.addEventListener("mouseover", (e)=>{
    console.log("mouseover event occured!!");
})

mainButton.addEventListener("mouseleave", (e)=>{
    console.log("mouseleave event occured!!");
})

