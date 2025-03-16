// It should have 4 routes

// 1. http://localhost:3000/multiply?a=1&b=2
// 2. [http://localhost:3000/add?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)
// 3. [http://localhost:3000/divide?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)
// 4. [http://localhost:3000/subtract?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)


const express = require('express');

const app = express();

let reqCount = 0;

function requestCount() {
    reqCount++
    console.log(reqCount);
    
}

app.get("/multiply", (req, res) => {
    requestCount();
    let a = req.query.a;
    let b = req.query.b;
    
    res.json({
        ans: a*b
    })
})

app.listen(3000);