// intro to  event

const btn = document.querySelector(".btn-headline");
// btn.onclick = function(){
//     console.log("you clicked on me!");
// }

// function clickme(){
//     console.log("you clicked on me!!!!!");
// }
btn.addEventListener("click", ()=>{console.log("you clicked on me!!")});