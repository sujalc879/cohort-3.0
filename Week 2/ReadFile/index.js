const fs = require("fs")

function cb(err, data) {
    if (err) {
        console.log("your error is " + err);

    } else {
        console.log(data);
        
    }
}

fs.readFile("a.txt", "utf-8", cb)

