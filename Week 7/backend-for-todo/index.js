const express = require('express');
const jwt = require('jsonwebtoken');
const { UserModel, TodoModel } = require("./db");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");

const JWT_SECRETE = "sujal";

mongoose.connect("");

app.use(express.json());

app.post("/signup",async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
   await UserModel.create({
        email : email,
        password : password,
        name : name
    })

    res.json({ Message : "you are signup"})
})

app.post("/signin",async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

   const user = await UserModel.findOne({
        email : email,
        password : password
    })

    console.log(user);
    

    if (user) {
        const token = jwt.sign({ id : user._id.toString() }, JWT_SECRETE)
        res.json({
            token : token
        })
    } else {
        res.status(403).json({ Message : "invalid Credentials"});
    }

})

app.use(auth);

app.post("/todo", function (req, res) {
    const userId = req.userId;

    res.json({
        userId : userId
    })
})

app.get("/todos", function (req, res) {
    const userId = req.userId;
    
    res.json({
        userId : userId
    })
    
})

function auth(req, res, next) {
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRETE);

    console.log(decodedData);
    console.log(decodedData.id);
    

    if (decodedData) {
        req.userId = decodedData.id;
        next();
    } else {
        res.status(403).json({ Message : "invalid credentials"});
    }
}

app.listen(PORT, () => {
    console.log("the server is running on port " + PORT);
})