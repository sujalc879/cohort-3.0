const express = require('express');
const { z } = require('zod');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require('./auth');
const app = express();
const PORT = 3000;

mongoose.connect("")
.then(() => { console.log("the database is connected") })
.catch((error) => {console.log(error) });

app.use(express.json());

app.post("/signup", async function (req, res) {
    const requiredBody = z.object({
        name : z.string().min(3).max(100),
        email : z.string().email().min(3).max(100),
        password : z.string().min(3).max(100).regex(/[A-Z]/, "Please Enter Atleast One UpperCase In Password Field").regex(/[a-z]/, "Please Enter Atleast One LowerCase In Password Field")
    })

    const response = requiredBody.safeParse(req.body);

    if (!response.success) {
        res.json({
             Message : "Please Enter in valid format",
             error : response.error.issues[0].message
            });
    } else {

    try {
    
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
    
        const hashedPassword = await bcrypt.hash(password, 5);
    
        await UserModel.create({
            name : name,
            email : email,
            password : hashedPassword
        })
    
        res.json({ Message : "You are sign up"});
        
    } catch (error) {
        res.json({ Message : "the user is already exist"});
    }
}

})

app.post("/signin",async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email : email
    })

    if (!response) {
        res.json({ Message : "your credentials is invalid"});
    }
    
    const passwordMatch = await bcrypt.compare(password, response.password);
    
    if (passwordMatch) {
        const token = jwt.sign({ id : response._id.toString() }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({ Message : "invalid credentials"});
    }
    
})

// authenticated endpoints
app.use(auth);

app.post("/todo", function (req, res) {
    const userId = req.userId;
    res.json({ userId });
})

app.get("/todos", function (req, res) {
    const userId = req.userId;
    res.json({ userId });
})

app.listen(PORT, () => { console.log("the server is listining on port " + PORT) })