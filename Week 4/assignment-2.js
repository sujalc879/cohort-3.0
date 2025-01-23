const fs = require('fs');
const { Command, Option } = require("commander");
const { json } = require('stream/consumers');
const program = new Command();

program
.name("Your Latest Todos")
.description("it lets you Create Your Latest Todo in todos.json")
.version("0.8.0");

program.command("addTodo")
   .description("first argument is title & Second argument is description")
   .argument("<string>", "Add Your Todo Title")
   .argument("<string>", "Add Your Todo Body")
   .action((string1, string2) => {
    let title = string1;
    let body = string2;

    addTodo(title, body);
    
    });


program.command("showTodo")
   .description("it lets you shows all the Todos & optional argument is --id & number to show the specific todo")
   .addOption(new Option('--id <id>', 'Show a specific Todo by its ID'))
   .action((options) => {
    try {
        // Read and parse todos from the JSON file
        const todosJson = fs.readFileSync("./todos.json", "utf-8");
        const todos = JSON.parse(todosJson);

        if (options.id) {
            if (options.id) {
              console.log("Specific Todo:", todos[options.id]);
            } else {
              console.error(`Todo with ID ${options.id} not found.`);
            }
          } else {
            // Show all todos
            console.log("All Todos:", todos);
          }
        
    
   }
    catch (err){
        console.log(err);
        
    }});

program.command("deleteTodo")
.description("first argument is number of the todo which is you want to delete")
.argument("<number>", "Add Your Todo Title")
.action((number) => {
    const todosJson = fs.readFileSync("./todos.json", "utf-8");
    const todos = JSON.parse(todosJson);
    
    todos.splice(number, 1);

    fs.writeFileSync("./todos.json", JSON.stringify(todos));
    console.log("your todo Number " + number + " is deleted Successfully...");
    
    
})
    





program.parse();


function addTodo(todoTitle, todoBody) {
    let todosJson = fs.readFileSync("./todos.json", "utf-8", (err, data) => { return data});

    let todos = JSON.parse(todosJson);

    let newTodo = {
        title :  todoTitle,
        body :  todoBody,
        status : false
    }

    todos.push(newTodo);

    fs.writeFileSync("./todos.json", JSON.stringify(todos));

    console.log("Your Todos Successfully Added...");
    
    
}



