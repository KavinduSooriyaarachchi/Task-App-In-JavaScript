// Function to create a new todo item
function createTodoElement(todoText) {
  const newTodoItem = document.createElement("li");
  newTodoItem.classList.add("newtodo-item")


  const checkbox = document.createElement("div");
  checkbox.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;


  const todoTextSpan = document.createElement("div");
  todoTextSpan.textContent = todoText;

  const deleteIcon = document.createElement("div");
  deleteIcon.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  deleteIcon.classList.add("delete-icon");

  checkbox.addEventListener("change", () => updateTodoCompletion(newTodoItem, checkbox.checked));
  deleteIcon.addEventListener("click", () => deleteTodoItem(newTodoItem));

  newTodoItem.appendChild(checkbox);
  newTodoItem.appendChild(todoTextSpan);
  newTodoItem.appendChild(deleteIcon);

  return newTodoItem;
}

// Function to add a new todo
function addTodo() {
  const todoInput = document.getElementById("newTodo");
  const todoText = todoInput.value.trim();

  if (todoText !== "") {
    const todoList = document.getElementById("todoList");
    const newTodoItem = createTodoElement(todoText);

    todoList.appendChild(newTodoItem);
    todoInput.value = "";
  }
}

// Function to update todo completion status
function updateTodoCompletion(todoItem, isCompleted) {
  todoItem.classList.toggle("completed", isCompleted);
}

// Function to delete a todo item
function deleteTodoItem(todoItem) {
  const todoList = document.getElementById("todoList");
  todoList.removeChild(todoItem);
}

// Function to clear all todos
function clearTodos() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";
}

const addBtn = document.getElementById("addItemBtn");
addBtn.addEventListener('click', addTodo);

document.addEventListener('keypress', (e)=>{
  if(e.key === 'Enter'){
    addTodo();
  }
  
})