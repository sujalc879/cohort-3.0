import express from "express";
import cors from "cors";
import {getAllTodo, createTodo, updateTodo, deleteTodoById, searchTodo} from "./routes/todo.js"

const app = express();
const PORT = 3001;

app.use(cors())
app.use(express.json())

app.get("/todos", getAllTodo);

app.post("/todos", createTodo);

app.put("/todos/:id", updateTodo);

app.delete("/todos/:id", deleteTodoById);

app.get("/todos/search", searchTodo);

app.listen(PORT, () => {
    console.log("server is listining on " + PORT + " port");
})