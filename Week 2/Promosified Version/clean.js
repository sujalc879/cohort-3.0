let fs = require("fs")

function readThefile(sendFinalValue) {
    fs.readFile("example.txt", "utf-8", function (err, data) {
        sendFinalValue(data)   
    })
}

function readFile(Filename) {
    return new Promise(readThefile)
}

const p = readFile()

function callback(contents) {
    console.log(contents);
    
}

p.then(callback)