// event object

const allButtons = document.querySelectorAll(".my-button button");

for(let button of allButtons){
    button.addEventListener("click", function(e){console.log(e.target);})
}