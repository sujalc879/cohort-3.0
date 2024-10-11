// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male

let users = [
    {name:"sujal", age:23, gender:"male"},
    {name:"sunita", age:3, gender:"female"},
    {name:"chaudhary mam", age:13, gender:"female"},
    {name:"harshali", age:67, gender:"female"},
    {name:"harkirat", age:89, gender:"male"},
    {name:"pravin", age:12, gender:"male"}
]

function moreThan18(users) {
    users.filter((user) => {
        if (user.age > 18 && user.gender == "male") {
         console.log(user);
        }
    })
}

moreThan18(users)