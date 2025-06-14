const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { auth, JWT_SECRETE } = require("./auth");
const mongoose = require('mongoose');
const { UserModel, TodoModel } = require("./db");
const { z, boolean } = require('zod');
const app = express();
const PORT = 3000;


mongoose.connect("mongodb+srv://sujalchaudhari879:3fzQkpghlANTriGL@cluster0.icedcdv.mongodb.net/My-todo-app")
.then(() => { console.log("the database is connected")})
.catch(() => { console.log("there is problem of connecting to the database")})

app.use(express.json());

app.post("/signup", async (req, res) => {
    const requiredBody = z.object({
        name : z.string().min(3).max(50),
        email : z.string().email().min(3).max(100),
        password : z.string().min(3).max(100).regex(/[A-Z]/, "Please Enter Atleast One UpperCase Character In Password Field").regex(/[a-z]/, "Please Enter Atleast One LowerCase Character In Password Field")
    })

    const response = requiredBody.safeParse(req.body);

    if (!response.success) {
        res.json({ Message : response.error.issues[0].message});
    } else {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        const hashedPassword = await bcrypt.hash(password, 5);

        try {
            await UserModel.create({
                name : name,
                email : email,
                password : hashedPassword
            });
    
            res.json({ Message : "You Are sign up"});
            
        } catch (error) {
            res.json({ Message : "The user is already exist Try different email id"});
        }
    }

});

app.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.find({
        email : email
    })

    if (user.length == 0) {
        res.status(403).json({ Message : "User not found"});
    } else {
        const authenticatedUser = bcrypt.compare(password, user[0].password);
        
        if (authenticatedUser) {
            const token = jwt.sign({
                id : user[0]._id.toString()
            }, JWT_SECRETE);
    
            res.json({
                token : token
            });
        } else {
            res.status(403).json({ Message : "Your Password is invalid"});
        }
        
    }
     
});

// Authenticated EndPoints
app.use(auth);

app.post("/todo", async (req, res) => {
    const title = req.body.title;
    const done = req.body.done;
    const userId = req.userId;

    try {
        await TodoModel.create({
            userId : userId,
            title : title,
            done : done
        });
    
        res.json({ Message : "Todo Created Successfully"});
        
    } catch (error) {
        res.status(403).json({ Message : "todo is not created"});
    }
});

app.get("/todos", async (req, res) => {
    const userId = req.userId;

    const response = await TodoModel.find({
        userId : userId
    });

    console.log(response);
    
});

app.listen(PORT, () => {
    console.log("the server is listining on Port " + PORT);
});