let todos = []; // in memory space

export async function getAllTodo(req, res, next) {
    //  write here
    res.json(todos);
}

export async function createTodo(req, res, next) {
    //  write here
    let createTodo = req.body.createTodo;
    todos.push(createTodo);
    res.json(todos);
}

export async function updateTodo(req, res, next) {
    //  write here
    let todoId = parseInt(req.params["id"]);
    todoId--;
    let updateTodo = req.body.updateTodo;
    todos.splice(todoId, 1, updateTodo)
    res.json(todos);

}

export async function deleteTodo(req, res, next) {
    //  write here
    todos = [];
    res.json(todos);
}

export async function deleteTodoById(req, res, next) {
    //  write here
    let todoId = parseInt(req.params["id"]);
    todoId--;
    todos.splice(todoId, 1)
    res.json(todos);
}

export async function searchTodo(req, res, next) {
    //  write here
    res.json([
        {
            "route 1": "http://localhost:3001/todos",
            "Method": "GET",
            "purpose":"get all the todos"
        },
        {
            "route 2": "http://localhost:3001/todos",
            "Method": "POST",
            "purpose":"create a todo"
        },
        {
            "route 3": "http://localhost:3001/todos/:id",
            "Method": "PUT",
            "purpose":"Update a Todo"
        },
        {
            "route 4": "http://localhost:3001/todos",
            "Method": "DELETE",
            "purpose":"Deletes all todos"
        },
        {
            "route 5": "http://localhost:3001/todos/:id",
            "Method": "DELETE",
            "purpose":"Delete one todo"
        },
        {
            "route 6": "http://localhost:3001/todos/search",
            "Method": "GET",
            "purpose":"get all routes of http://loaclhost:3001"
        }
        
    ])
}