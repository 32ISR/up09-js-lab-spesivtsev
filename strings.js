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
const date = "2025-03-15"
const splitdate = split(date)
console.log(splitdate)