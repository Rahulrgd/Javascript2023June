// get and set attributes

const link = document.querySelector("a");
console.log(link.getAttribute("href").slice());
link.setAttribute("href", "https://www.rgdgroups.com");

const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));