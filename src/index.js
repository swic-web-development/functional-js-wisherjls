// functions.

// javascript
// function calculateOrderCost(order) {
//   return order.quantity * order.priceEa
// }

// const calcOrderCost = (order) => {
//   return order.quantity * order.priceEa
// }

//const calcOrderCost = (order) => order.quantity * order.priceEach


//function doSomethingWithNumber(number, callbackFunction) {
  //return callbackFunction(number)
//}

//function divideByTwo(num) {
  //return num / 2
//}

//function double(num) {
  //return num * 2
//}

//function triple(num) {
  /return num * 3
//}
//369 is the number that we want to do something with.
//double is the callback function that we want to do with the number.
//console.log(doSomethingWithNumber(369, double))  
//console.log(doSomethingWithNumber(369, triple))
//console.log(doSomethingWithNumber(369, divideByTwo))




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

const backpackFullOfAmmo = [
{item: 'bullets', quantity: 10, priceEach: 0.5},
{item: 'shoutgun shells', quantity: 4, priceEach: 0.5},
{item: 'rockets', quantity: 1, priceEach: 5.0},
{item: 'energy cell units', quantity: 20, priceEach: 0.2}
]

const tableOfAmmo = backpackFullOfAmmo.map((ammo) => {
    return  `<tr>
    <td>${ammo.name}</td>
    <td>${ammo.quantity}</td>
    <td>${ammo.priceEach}</td>
    </tr>`
}).join('\n') 

console.log(tableOfAmmo)

const calculateOrderCost = (order) => order.quantity * order.priceEach

backpackFullOfAmmo.map((ammo) => {console.log(ammo)})
