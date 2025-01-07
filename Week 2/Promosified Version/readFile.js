const fs = require('fs');
const util = require('util');

let readFile = util.promisify(fs.readFile)

async function readMyFile(FilePath) {
    try {
        let data = await readFile(FilePath, `utf8`)
        console.log(data);
        
    } catch (error) {
        console.log(`error in reading file ${error}`);
    }
}

readMyFile(`example.txt`)


