const fs = require('fs');

function getWords(filePath) {
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            
        } else {
            let wordLength = data.split(" ").length;

            console.log("There are " + wordLength + " words in " + filePath);
            
            
        }
    })
}
getWords(process.argv[2]);