// // console.log("file lined");
// const btn = document.querySelector("#one");
// btn.addEventListener("click", ()=>{console.log("you clicked me!");})

const allButtons = document.querySelectorAll(".my-button button");

for(let button of allButtons){
    button.addEventListener("click", function(){console.log(this.textContent);})
}