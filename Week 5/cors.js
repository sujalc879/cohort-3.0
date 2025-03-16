const express = require('express');

const cors = require('cors');

const app = express();


app.use(express.json());
app.use(cors());

app.post("/sum", async (req, res) => {
   let a = parseInt(req.body.a);
   let b = parseInt(req.body.b);

    res.json({
        ans:a+b
    })

})

app.listen(3001)