// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
// Also Tell the user if They Can Vote or Not

let user = {
    name:"Harkirat",
    age:21,
    gender:"male"
}

function greets(user) {
    console.log("Hi Mr " + user.name + ", Your age is " + user.age + " & Your Are eligible To Vote");
    
}

greets(user)