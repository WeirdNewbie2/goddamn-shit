const myArray = [1, 2, 3]
console.log(myArray)

const myArray2 = new Array(1, 2, 3)
console.log(myArray2)

console.log(myArray.length) // 3

const myArray3 = myArray
console.log (myArray[0] === myArray2[0]) // true
console.log (myArray === myArray2) // false

const myObject = {
    0: 1,
    1: 2,
    2: 3
}
console.log (myArray[0] === myObject['0']) // true

myArray.length = 4 // array length = 4

myArray[2] = true
console.log(myArray) // [ 1, 2, true, <1 empty item> ]

myArray[4] = 'meow'
console.log (myArray.length) // 5

