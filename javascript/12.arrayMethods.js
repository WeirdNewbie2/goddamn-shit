function call() {
    console.log(myArray)
}
const myArray = [1, 2, 3]
console.log(myArray)


myArray.push(true, false)
call() // [ 1, 2, 3, true, false ]


const removed = myArray.pop()
console.log(removed) // false


myArray.unshift('string')
call() // [ 'string', 1, 2, 3, true ]


const shifted = myArray.shift()
console.log(shifted) // string


myArray.forEach(el => console.log(el + 1)) // 2 3 4 2
call() // [ 1, 2, 3, true ] didnt change


const newArray = myArray.map(el => el * 2) // callback functin required, creates new array
console.log(newArray) // [ 2, 4, 6, 2 ]
call() // [ 1, 2, 3, true ]


