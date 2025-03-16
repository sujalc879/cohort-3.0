const API_URL = "http://localhost:3001/todos";

document.addEventListener("DOMContentLoaded", async () => {
    fetchTodos();
})

// fetch all existing todos
async function fetchTodos() {
    let fetchedTodos = await fetch(API_URL);
    let responseTodos = await fetchedTodos.json();
    responseTodos.forEach( todo => {
        addTodoToDom(todo)
    });
    
}

// adding existing todos to the DOM
function addTodoToDom(todo) {
    let todoList = document.getElementById("todo-list");
    let todoItem = document.createElement("li");

    todoItem.innerHTML = todo.task;
    todoItem.setAttribute("data-id", todo.id);

    let deleteBtn = document.createElement("img");
    deleteBtn.setAttribute("src", "https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-vector-cross-icon-png-image_1016083.jpg");
    deleteBtn.setAttribute("alt", "Delete");
    deleteBtn.addEventListener("click", () => { deleteTodo(todo.id) })

    todoItem.appendChild(deleteBtn);

    todoList.appendChild(todoItem);

}


// Add new todos to the dom
document.getElementById("add-todo-btn").addEventListener("click", async () => {
    let todoInput = document.getElementById("todo-input");

    let newTodo = {task : todoInput.value};

    if (!todoInput.value) {
        alert("input cannot be Empty");

    } else {
        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTodo),
        })
            .then(response => response.json())
            .then(todo => {
                addTodoToDom(todo)
                todoInput.value = ''; 
            })
            .catch(error => console.error('Error adding todo:', error));
    }
    
})


// deleting the Todo 
function deleteTodo(id) {
    fetch(`${API_URL}/${id}`, {
        method : "DELETE"
    })
    .then(() => {
        const todoItem = document.querySelector(`[data-id='${id}']`);
        todoItem.remove();
    })
    .catch((error) => {
        console.log("error for deleting Todo " + error);
    })
}