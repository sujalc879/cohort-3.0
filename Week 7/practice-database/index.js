const express = require('express');
const app = express();

const { z } = require("zod");

const bcrypt = require("bcrypt");

const {auth, JWT_SECRETE } = require('./auth');

const jwt = require("jsonwebtoken");

const mongoose = require('mongoose');
const { UserModel, TodoModel } = require("./db");
mongoose.connect("mongodb+srv://sujal:sujal@cluster0.yz2eeuj.mongodb.net/todo-app-database");

const PORT = 3000;

app.use(express.json());

app.post("/signup", async function(req, res) {

    const requiredBody = z.object({
        email : z.string(),
        password : z.string().min(3).max(100),
        name : z.string().min(2).max(100)
    });

    const parseDataWithSussess = requiredBody.safeParse(req.body);

    if (!parseDataWithSussess) {
        res.status(403).json({
            message : parseDataWithSussess.error
        });
    }
    const { email, password, name } = req.body;
try {
        const hashedPassword = await bcrypt.hash(password, 5);
        await UserModel.create({
            email : email,
            password : hashedPassword,
            name : name
        });
        
        res.json({ Message : "you are signed up"});
        
    


} catch (error) {
    res.status(403).json({ Message : "user is already exits"});
}
})

app.post("/signin", async function(req, res) {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({
                email
            });

        const hashedPassword = user.password;

        const passwordMatch = await bcrypt.compare(password, hashedPassword);
        
        if (passwordMatch) {
            const token = jwt.sign({
                id : user._id
            }, JWT_SECRETE)
    
            res.json({
                token
            })
        } else {
            res.status(403).json({ Message : "invalid credentials"});

        }
        
    } catch (error) {
        res.status(403).json({ Message : "invalid credentials"});
}
})

app.use(auth);

app.post("/todo", async function(req, res) {
    const id = req.id;

    const { title, done } = req.body;

    try {
      const response = await TodoModel.create({
            title,
            done,
            userId : id
        })
    
        res.json({ Message : "todo is created"});
    } catch (error) {
        res.json({ Message : "problem in ceation of todos" });
    }
})

app.get("/todos", async function(req, res) {
    const id = req.id;
    
    try {
        const todos = await TodoModel.find({
            userId : id
        })

        res.json({todos});
    } catch (error) {
        res.status(403).json({ Message : "todos are not found"});
    }
})

app.listen(PORT, () => { console.log("the server is listining on port " + PORT)} );