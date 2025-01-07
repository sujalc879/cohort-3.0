// function setTimeoutPromisified(ms) {
//     return new Promise((resolve) => {
//      setTimeout(() => {
//         resolve();
//      }, ms);
       
//     });
// }
 
// setTimeoutPromisified(1000).then(function () {
//     console.log("hii");
//     return setTimeoutPromisified(3000)})

//     .then(function () {
//         console.log("hello");
//         return setTimeoutPromisified(5000)})

//     .then(function () {
//             console.log("hi there");
//         })
    









function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    await setTimeoutPromisified(1000)
    console.log("hii");
    
    await setTimeoutPromisified(3000)
    console.log("hello");
    
    await setTimeoutPromisified(5000)
    console.log("hii there");
}
main();







