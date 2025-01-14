// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

function main() {
    fs.readFile("./week-2/week-2-async-js/medium/file.txt", "utf-8", (err, data) => {
        let actualData = data.split(" ")
        let result = [];

        actualData.forEach((value) => {
            if (value.length >= 1 ) {
               result.push(value)
                
            }
        })
        console.log(result.join(" "));
        
             
    })
}
main()