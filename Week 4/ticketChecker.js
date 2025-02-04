const express = require('express');

const app = express();

function ticketChecker(req, res, next) {
    const ticket = req.query.ticket;
    const age = req.query.age;
    if (ticket === "paid" && age >= 18) {
        next();
    } else {
        res.status(411).json({
        message:"Access Denied Because You dont have ticket or age"
    })
    }
}

app.use(ticketChecker);

app.get("/ride1", function (req, res) {
    res.json({
        message:"your ride 1 is successfull"
    })
})

app.get("/ride2", function (req, res) {
    res.json({
        message:"your ride 2 is successfull"
    })
})

app.get("/ride3", function (req, res) {
    res.json({
        message:"your ride 3 is successfull"
    })
})

app.listen(3000);

