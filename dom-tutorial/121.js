const btn = document.querySelector(".btn-headline");

function clickme(){
    console.log("you clicked on me!!");
    console.log("value of this");
    console.log(this);
}

btn.addEventListener("click", clickme);