// + - * /
// === !== <= >= 
// ! && || [not, and, or]
// =

// === compares type as well, but == not

// унарные операторы
/*
a++
+a
delete obj.a
typeof a
new Object()
*/

// operand (values and variables) and operator (symbols)

// infix, prefix, postfix

let a = '5'
result = Boolean(a == 5) // true
console.log(result)

console.log(typeof a) // string
console.log(typeof 'asd' === 'string') // true


const nullObject = {}
console.log(!!nullObject) // true


const oldObject = {
    width: 250,
    height: 200
}

const newObject = {
    ...oldObject,
    height: 250
}

console.log(oldObject)
console.log(newObject)

let b = 10
const res = `${a + b} ${b}` // is a string
console.log(res) // 510 10

setTimeout(function() {
    console.log('message')
}, 1000)

setTimeout(() => {
    console.log('message')
}, 1000)

setTimeout(() => console.log('testmessage'), 1000)