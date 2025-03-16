let todos = []; // in memory todos
let todoId = 1; // unique id for Each Todo

export async function getAllTodo(req, res) {
    res.json(todos);
}

export async function createTodo(req, res) {
    let { task } = req.body;

    if (!task) {
        return res.status(400).json({error : "Task is Required"});
    }

    let newTodo = { id:todoId++, task }; // increase counter for each todo

    todos.push(newTodo)

    res.status(201).json(newTodo);
}

export async function updateTodo(req, res) {
    let { task } = req.body;
    let { id } = req.params;
     
    if (!task) {
        return res.status(400).json({error: "message is required"})
    }

    let todoIndex = todos.findIndex(todo => todo.id == id);
    
    if (todoIndex !== -1) {
        todos[todoIndex] = { ...todos[todoIndex], task };
        res.json(todos[todoIndex]);
    } else {
        res.status(400).json({error : "Todo Not Found"})
    }
    
}

export async function deleteTodoById(req, res) {
   const id = req.params["id"];

   const todoIndex = todos.findIndex(todo => todo.id == id);
   

   if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
    res.status(204).send(); 
   } else {
    res.status(404).json({error:"Todo Not Found"});
   }
}

export async function searchTodo(req, res) {
    const { q } = req.query;
    if (!q) {
        return res.status(400).json({ message: 'Query parameter missing' });
    }

    let filteredTodos = todos.filter((todo) => {
       return todo.task.toLowerCase().includes(q.toLowerCase())
    });

    if (filteredTodos.length == 0) {
        res.status(404).json({Message:"Todo Not Found"});
    } else {
        res.json(filteredTodos);
        
    }


    
}