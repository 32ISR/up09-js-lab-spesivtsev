// 1
const sentence = " javascript — это просто! "
const result = sentence.trim()[0].toUpperCase() + sentence.trim().slice(1)
console.log(result)

// 2
const stname = "Иванов Иван"
const group = "ИСР-21"
const score = 4.75
const info = `Студент ${stname}, группа ${group}, средний балл: ${score}`
console.log(info)

// 3
const [y, m, d] = '2025-03-18'.split('-')
console.log(`${d}.${m}.${y}`)

// 4
const str = "Node.js разработчик"
console.log(str.startsWith('Node') && str.endsWith('разработчик'))

// 5
console.log(String(42).padStart(8, '0'))