// functions.

// javascript
// function calculateOrderCost(order) {
//   return order.quantity * order.priceEa
// }

// const calcOrderCost = (order) => {
//   return order.quantity * order.priceEa
// }

//const calcOrderCost = (order) => order.quantity * order.priceEach


function doSomethingWithNumber(number, callbackFunction) {
  return callbackFunction(number)
}

function divideByTwo(num) {
  return num / 2
}

function double(num) {
  return num * 2
}

function triple(num) {
  return num * 3
}
//369 is the number that we want to do something with.
//double is the callback function that we want to do with the number.
console.log(doSomethingWithNumber(369, double))  
console.log(doSomethingWithNumber(369, triple))
console.log(doSomethingWithNumber(369, divideByTwo))




// imperative loop:
//const numbers = [1, 2, 3, 4, 5]
//const doubledNumbers = []

//for (let i = 0; i < numbers.length; i++) {
// doubledNumbers.push(numbers[i] * 2)
//}

//console.log(doubledNumbers)

//the map method:

const numbers = [1, 2, 3, 4, 5]

const doubledNumbers = numbers.map(function (number) {
  return number * 2
})

console.log(doubledNumbers)