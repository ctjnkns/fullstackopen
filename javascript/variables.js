const x = 1
let y = 5

console.log(x, y)
y += 10
console.log(x, y)
y = 'sometext'
console.log(x, y)
x = 4

const t = [1, -1, 3]
t.forEach(function (value) {
    console.log(value)
})
const t2 = t.concat(5)  

const t3 = t.filter(function (value) {
    return value > 1
})

const m1 = t.map(function (value) {
    return value * 2
})

console.log(m1)