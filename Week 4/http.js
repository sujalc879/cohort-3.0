const express = require('express');

let app = express();

const users = [{
    Name: "Sujal",
    kidneys: [{
        healthy: false
    },
    {
        healthy: true
    }]
}]

app.use(express.json());

app.get("/", function (req, res) {
    kidneysCount = 0;
    let isHealthy = 0;
    let isNotHealthy = 0;

    for (let i = 0; i < users[0].kidneys.length; i++) {
        kidneysCount++;
        if (users[0].kidneys[i].healthy == true) {
            isHealthy++;
        } else {
            isNotHealthy++;
        }
    };

    res.send(users[0].Name + " Have " + kidneysCount + " kidneys. " + isHealthy + " is healthy & " + isNotHealthy + " is Not healthy" + `<p>${JSON.stringify(users[0].kidneys)}</p>`);
    res.json();
});

app.post("/", function (req, res) {
    let isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        "healthy":isHealthy
    })
    

    res.send("Post Request is Working");
    res.json();
});

app.put("/", function (req, res) {
    users[0].kidneys.forEach(kidney => kidney.healthy = true);
    
    res.send("Put Request is Working");
    res.json();

})


app.delete("/", function (req, res) {
    const kidneyNo = req.query.kidneyNo; // Access the user ID from the URL path
    let intKidneyNo = parseInt(kidneyNo);

    if (intKidneyNo < users[0].kidneys.length) {
        users[0].kidneys.splice(intKidneyNo, 1);
    }

    res.json();
    
})

app.listen(3000);