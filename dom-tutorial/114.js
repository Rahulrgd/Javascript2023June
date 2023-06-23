// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("Teach students");
// newTodoItem.appendChild(newTodoItemText);
// const todoList = document.querySelector(".todo-list");
// todoList.append(newTodoItem);
// todoList.prepend(newTodoItem);
// console.log(newTodoItem);

// removing an element using dom
// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();

// console.log();

// before and after method

// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("Teach students");
// newTodoItem.append(newTodoItemText);
// const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);

// after method example

const newTodoItem = document.createElement("li");
const newTodoItemText = document.createTextNode("Teach students");
newTodoItem.append(newTodoItemText);
const todoList = document.querySelector(".todo-list");
todoList.after(newTodoItem);

