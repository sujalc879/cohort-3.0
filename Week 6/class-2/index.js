const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();

let users = [];

const SECRETE_KEY = "sujal";

function auth(req, res, next) {
    let token = req.headers.token;
    if (token) {
        jwt.verify(token, SECRETE_KEY, (err, decoded) => {
            if (err) {
                res.status(402).json({ Message : "Unauthorizedn"});
            } else {
                req.username = decoded.username;
                next();
            }
        });
        
    } else {
        res.status(402).json({ Message : "Unauthorized"});
    }
}

app.use(cors());
app.use(express.json());

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
        res.status(400).json({ Message : "Username & Password are Required"});
    } else {
        let foundExistingUser = users.find( user => user.username == username);

        if (!foundExistingUser) {
            const newUser = { username : username, password : password};
    
            users.push(newUser);
    
            res.status(201).json({ Message : "You Are Sign up"});
            
        } else {
            res.json({ Message : "This username is already taken, Try Different One"})
        }
        
    }
})

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    let FoundUser = users.find( user => user.username == username && user.password == password);

    if (!FoundUser) {
        res.status(403).json({ Message : "invalid Credential"});
    } else {
        let token = jwt.sign({ username : FoundUser.username }, SECRETE_KEY)

        res.json({ token : token});
    }
})

app.get("/me", auth, (req, res) => {
    let username = req.username;

    let FoundUser = users.find( user => user.username == username);

    if (!FoundUser) {
        res.status(404).json({ Message : "User Not Found"});
    } else {
        res.json({ username : FoundUser.username, password : FoundUser.password })
    }
})

app.listen(5000, () => { console.log("server is listining on port " + 5000) })