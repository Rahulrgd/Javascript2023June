// static list vs live list

const listItems = document.querySelectorAll(".todo-list li");
const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";
const ul = document.querySelectorAll(".todo-list");
ul.append(sixthLi);
console.log(listItems);