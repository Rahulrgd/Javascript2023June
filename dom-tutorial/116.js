// clone node

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new todo";
ul.append(li);
ul.prepend(li);