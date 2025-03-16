const API_URL = 'http://localhost:3001/todos';

// Fetch existing todos when the page loads
document.addEventListener('DOMContentLoaded', async () => {
  // fetch todos
  let todo = await fetchTodos();
  addTodoToDOM(todo)
  
});

// Fetch todos from backend
async function fetchTodos() {
    //  write here
    let fetchTodos = await fetch(API_URL);
    let todo = await fetchTodos.json();
    return todo;
}

// Add a new todo to the DOM
function addTodoToDOM(todo) {
    //  write here
    let id = 1;
    todo.forEach(element => {
        let ul = document.querySelector("#todo-list");
        let list = document.createElement("li");
        list.innerHTML = element;
        let button = document.createElement("button");
        button.innerHTML = "delete";
        button.setAttribute("id", `${id++}`);
        button.setAttribute("onclick", "deleteTodo(`${id}`)");
        list.appendChild(button)
        ul.appendChild(list)
        
    });
    
}

// Add a new todo
document.getElementById('add-todo-btn').addEventListener('click', async () => {
    //  write here
    let todoValue = document.querySelector("#todo-input").value;
   let newFetchTodo = await fetch(API_URL,
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                "createTodo":todoValue
            })
        })

    let newTodo = await newFetchTodo.json();
    
    if (todoValue == "") {
        alert("Input Cannot Be Empty");
    } else {
        let id = 1;
        let ul = document.querySelector("#todo-list");
        ul.innerHTML = "";
        newTodo.forEach(element => {
            let list = document.createElement("li");
            list.innerHTML = element;
            let button = document.createElement("button");
            button.innerHTML = "delete";
            button.setAttribute("id", `${id++}`);
            button.setAttribute("onclick", "deleteTodo(`${id}`)");
            list.appendChild(button)
            ul.appendChild(list)
        });
    }
    
});

// Toggle todo completion
function toggleTodo(id, completed) {
//    write here
}

// Delete a todo
async function deleteTodo(deletedTodoId) {
    // write here 
    let fetchTodos = await fetch(API_URL + `/${deletedTodoId}`, {
          method: "DELETE"
    });
    let deletedTodo = await fetchTodos.json();
    console.log(deletedTodo);

    let id = 1;
    let ul = document.querySelector("#todo-list");
    ul.innerHTML = "";
    deletedTodo.forEach(element => {
        let list = document.createElement("li");
        list.innerHTML = element;
        let button = document.createElement("button");
        button.innerHTML = "delete";
        button.setAttribute("id", `${id++}`);
        button.setAttribute("onclick", "deleteTodo(`${id}`)");
        list.appendChild(button)
        ul.appendChild(list)
    });
}