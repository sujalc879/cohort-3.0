// Q: Write code that
// logs hi after 1 second
// logs hello 3 seconds after step 1
// logs hello there 5 seconds after step 2
 
// setTimeout(() => {
//     console.log("1s");
//    setTimeout(() => {
//     console.log("3s");
//     setTimeout(() => {
//         console.log("5s");
        
//     }, 5000)
    
//    }, 3000)
    
// }, 1000)


// function setTimeoutPromisified(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms))
// }
  
// setTimeoutPromisified(1000)
// .then(function () {
//     console.log("1s");
    
// })
// .then( setTimeoutPromisified(3000)
// .then(function () {
//     console.log("3s");
    
// }))


// function doAsyOp(resolve) {
//     setTimeout(() => {
//         resolve()
//     }, 3000);
// }

// const p = new Promise(doAsyOp);

// function after() {
//     console.log("3 Seconds Passed");
    
// }

// p.then(after);









// class Circle {
//     constructor(radius, colour) {
//         this.radius = radius;
//         this.colour = colour;
//     }

//     diameter() {
//         return this.radius + this.radius;
//     }

//     color() {
//         return "The color of the circle is " + this.colour;
//          }
// }

// const circle = new Circle(5, "red");

// let diameter = circle.diameter();

// console.log(diameter);

// let color = circle.color();

// console.log(color);






















// const Circle = {
//     radius:7,
//     color:"red"
// };
// let Diameter = Circle;

// function diameter() {
//     return Diameter.radius + Diameter.radius;
// }

// console.log(diameter());


// function color() {
//     return "the color of the circle is " + Diameter.color;
// }

// console.log(color());




































// Q: Write code that
// logs hi after 1 second
// logs hello 3 seconds after step 1
// logs hello there 5 seconds after step 2
 
// --------------------CALLBACK BASED APPROACH--------------------
// function code() {
//     setTimeout(() => {
//         console.log("hii");
//         setTimeout(() => {
//             console.log("hello");
//             setTimeout(() => {
//                 console.log("hello there");
                
//             }, 5000);
            
//         }, 3000);
//     }, 1000);
// }
// code();


// --------------------PROMISE BASED APPROACH--------------------

// function code() {
//     return new Promise(function main(resolve) {
//         setTimeout(() => {
//             console.log("hii");
//             resolve()
//         }, 1000);
//     })
// }

// let p = code().then(function mail() {
//     return new Promise(function main(resolve) {
//         setTimeout(() => {
//             console.log("hhhhhhhhhhh");
//             resolve()
//         }, 3000);
//     })
// })

// p.then(function last() {
//     setTimeout(() => {
//         console.log("jjjjjjjjjjjjjj");
//     }, 5000);
// })




// --------------------ASYNC AWAIT BASED APPROACH--------------------
async function main() {
async function code() {
    setTimeout(function hii() {
        console.log("hii");
    }, 1000);
}
    
await code();
async function sudo() {
 setTimeout(function gj() {
        console.log("hello");
    }, 3000);
}
await sudo();

async function sujal() {
  
    setTimeout(function sfh() {
        console.log("hii there");
    }, 5000);
}
sujal()
}
main()