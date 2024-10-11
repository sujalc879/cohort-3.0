// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS


// METHOD 1

// let arrNum = [2, 3, 4, 5, 6, 7]

// function even(arrNum) {
//     let newArr = [];
//   for (let i = 0; i < arrNum.length; i++) {
//     if (arrNum[i] % 2 == 0) {
//         newArr.push(arrNum[i])
//     }
    
//   }
//   console.log(newArr);
  
 
// }

// even(arrNum)






// METHOD 2

let arrNum = [2, 3, 4, 5, 6, 7]

function even(arrNum) {
   let newArr = arrNum.filter((num) => num % 2 == 0)
    console.log(newArr);
}

even(arrNum)