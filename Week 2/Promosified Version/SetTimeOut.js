// function setTimeoutPromisyfied(milisecond) {
//     return new Promise(resolve => setTimeout(resolve, milisecond) )
// }
// function main() {
//     console.log("3 Seconds Has Been passed");
    
// }

// setTimeoutPromisyfied(2000).then(main)

// async function fetchPromisyfied(url) {

//     return new Promise(async(resolve, reject)=> {
//         let data = fetch(url);
//         await data;
//         resolve(data);
//     })
    
// }

// fetchPromisyfied("https://app.100xdevs.com/courses/14/430/432").then((data)=> {
//     console.log(data);
    
// })


// function waitFor3s(resolve) {
//     setTimeout(resolve, 3000);
// }

// function main() {
//     console.log("3 Seconds Has Been passed");
    
// }

// waitFor3s(main)


// function main() {
//     console.log("2 Seconds Has Passed");
    
// }

// const p = new Promise(function hii(resolve) { 
//     setTimeout(() => {
//         resolve(main());
//     }, 2000);
// })

const fs = require("fs")
console.log(fs.readFileSync("./example.txt", "utf-8"));


function Zala() {
    console.log("Zala Kam");
    
}
function cleanFile(file, func) {
let h = fs.readFileSync("./" + file, "utf-8").trim();
console.log(h);

   func();
   
}
cleanFile("example.txt", Zala)


