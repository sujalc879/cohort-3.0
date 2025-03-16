const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post("/sum", function main(req, res) {
    console.log(req.body);
    
    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);

    res.json({
        ans: a+b
    })
})


app.listen(3000);