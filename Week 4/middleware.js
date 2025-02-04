const express = require('express');
const app = express();

app.get("/error", (req, res, next) => {
    const err = new Error("somthing Went Wrong");
    next(err);
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("internal Server Error");
});


app.listen(3000)