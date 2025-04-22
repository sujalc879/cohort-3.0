const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

let users = [];

const JWT_SECRETE = "sujal";

console.log(users);

app.use(express.json());

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
        res.json({Message : "Username & Password are Required"});
    }

    const newUser = { username : username, password : password};

    users.push(newUser);

    res.json({
        Message : "you are Signup"
    })
    console.log(users);
    
})

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = users.find(user => user.username == username && user.password == password);

    if (!foundUser) {
        res.json({ Message : "The Username or Password is Invalid" });
    } else {
        let token = jwt.sign({ username : foundUser.username }, JWT_SECRETE);
        res.json({
            token : token
        })
        console.log(users);

    }

    // let token = generateToken();

    // foundUser.token = token;


})

app.get("/me", (req, res) => {
    const token = req.headers.token;

    let userDetails = jwt.verify(token, JWT_SECRETE)

    let username = userDetails.username;

    let FoundUser = users.find(user => user.username == username)

    if (FoundUser) {
        let userInfo = {username : FoundUser.username, password : FoundUser.password};
        res.json(userInfo);
    } else {
        res.status(404).json({ Message : "Token Invalid" })
    }
})

app.listen(3000, () => {console.log("server is listning on port " + 3000)})