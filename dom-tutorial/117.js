// some old methods to support poor IE
// appendChild
// insertBefore
// replaceChild
// removeChile

const ul = document.querySelector(".todo-list");

// new element
const li = document.createElement("li");
li.textContent = "new todo";

// referenceNode
const referenceNode = document.querySelector(".first-todo");
// ul.appendChild(li);
// ul.insertBefore(li, referenceNode);

ul.removeChild(referenceNode);