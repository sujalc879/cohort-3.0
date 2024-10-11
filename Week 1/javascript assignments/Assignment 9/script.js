// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

let users = [
    {name:"sujal", age:23},
    {name:"sunil", age:3},
    {name:"chaudhary", age:13},
    {name:"harshal", age:67},
    {name:"harkirat", age:89},
    {name:"pravin", age:12}
]

function moreThan18(users) {
    users.filter((user) => {
        if (user.age > 18) {
         console.log(user);
         
        }
        
    })
}

moreThan18(users)