const mainButton = document.querySelector("button");
// console.log(mainButton);
const body = document.body;
const currentColor = document.querySelector(".current-color");
// console.log(currentColor);

function randomColorGenerator(){
    const red = Math.floor(Math.random()*156);
    const green = Math.floor(Math.random()*156);
    const blue = Math.floor(Math.random()*156);
    const randomColor = `rgb(${red}, ${green}, ${blue})`
    return randomColor;
}

mainButton.addEventListener("click", ()=>{
    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor;
    // console.log(randomColor);
})