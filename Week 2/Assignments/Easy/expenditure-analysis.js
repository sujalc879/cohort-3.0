/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(id, timestamp, price, category, itemName) {
  return [
    {
      id, timestamp, price, category, itemName
    }
  ];
}

let id = "1"
let timestamp = new Date().getHours()+":" +new Date().getMinutes() + ":" + new Date().getSeconds()
let price = 23
let category = "Food"
let itemName = "Samosa"

let p = calculateTotalSpentByCategory(id, timestamp, price, category, itemName);
console.log(p);
