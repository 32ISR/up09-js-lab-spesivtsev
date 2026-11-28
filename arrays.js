// 1
const grades = [4, 5, 3, 5, 2, 4, 5, 3]
const avg = grades.reduce((s, n) => s + n, 0) / grades.length
console.log(avg.toFixed(2))

// 2
const filt = grades.filter(n => n > 3).map(n => `Оценка: ${n}`)
console.log(filt)

// 3
const words = ["банан", "яблоко", "вишня", "абрикос", "груша"]
console.log(words.sort().join(', '))

// 4
const products = [
    {name: "Ноутбук", price: 75000},
    {name: "Мышь", price: 1500},
    {name: "Монитор", price: 32000},
    {name: "Клавиатура", price: 3500},
    {name: "Наушники", price: 8000}
]

console.log(products.filter(p => p.price < 10000))
console.log(products.map(p => p.name))
console.log(products.reduce((sum, p) => sum + p.price, 0))

// 5
const nums = [12, 45, 7, 33, 18]
console.log(nums.some(n => n > 40))
console.log(nums.every(n => n > 5))