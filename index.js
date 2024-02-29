//let students = [
//    {
//        name: "javohir",
//        age: 15,
//        isMarried: true,
//        gender: 'male'
//    },
//    {
//        name: "munir",
//        age: 16,
//        isMarried: false,
//        gender: 'female'
//    },
//    {
//        name: "jago",
//        age: 14,
//        isMarried: true,
//        gender: 'amlet'
//    },
//    {
//        name: "jahonbek",
//        age: 14,
//        isMarried: true,
//        gender: 'female'
//    },
//] 

// let jenatih = 0

// students.forEach(user => {
//     if(user.isMarried === true) {
//         jenatih += 1
//     }
// })

//let name = prompt('Кто вам нужен?').toLowerCase().trim()
//
//let find = students.find((find) => {
//    return find.name === name
//})
//
//if(find) {
//    alert(`${find}
//    Name: ${find.name},
//    Age: ${find.age},
//    IsMaried: ${find.isMarried}
//    gender: ${find.gender}
//    `)
//}


let market = [
    {
        name: 'moloko',
        price: 13000,
        type: 'milk'
    },
    {
        name: 'potato',
        price: 4000,
        type: 'vegetable'
    },
    {
        name: 'vodka',
        price: 25000,
        type: 'alcohol'
    },
    {
        name: 'tvorog',
        price: 8000,
        type: 'milk'
    },
    {
        name: 'tomato',
        price: 20000,
        type: 'vegetable'
    },
    {
        name: 'vine',
        price: 85000,
        type: 'alcohol'
    },
    {
        name: 'pivo ot JAGO',
        price: 24000,
        type: 'alcohol'
    },
    {
        name: 'carrot',
        price: 4000,
        type: 'vegetable'
    },
    {
        name: 'smetana',
        price: 10000,
        type: 'milk'
    },
]

// let milk = {
//     count: 0,
//     total_price: 0
// }
// let vegetables = {
//     count: 0,
//     total_price: 0
// }
//let alcohol = {
//    count: 0,
//    total_price: 0
//}


let totalCost = market.reduce((price, product) => price + product.price, 0);

let mostExpensiveProduct = market.reduce((maxProduct, product) =>  product.price > maxProduct.price ? product : maxProduct)

let cheapestProduct = market.reduce((minProduct, product) => product.price < minProduct.price ? product : minProduct)

let averagePrice = totalCost /  market.length;

alert(`
Общая стоимость: ${totalCost}
Средняя сумма: ${averagePrice}
`)

console.log('Самый дешёвый:', cheapestProduct)
console.log('Самый дорогой:', mostExpensiveProduct)




