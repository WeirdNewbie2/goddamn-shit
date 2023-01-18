// This is a file that includes overall JavaScript functions review
let nB = '\n==========  [  NEXT BLOCK BELOW  ]  ==========\n'
// Names in JS have specific registers, depending on the usage
let myName = 'string'
let newPass = 123456
const DB_PASSWORD = newPass // assign a value for the constant
// PascalCase is user for functions and classes
console.log(myName)
console.log(DB_PASSWORD)
// DB_PASSWORD = newPass++ // constants can not be changed after assignment, otherwise an error occurs, comment the string to continue

// 3 main types of data: string, number, logical
let userName = 'username' // string
let userPass = '123456' // number
let isLogged = true // logical

// Other types
let a // undefined
let b = null // clear variable

console.log (nB + '[23]')

// Objects are links to several options
const userInfo = {
    login: 'username',
    password: 123456
}

// Links are shared with other objects
const newInfo = userInfo

console.log(userInfo.login)
console.log(newInfo.login)
console.log('Results above are the same, as objects are linked to same data\n\n')

// Types of variables are dynamic
function example () {
    console.log('Hello world')
}
example()

example = 'Null string' // as types are dynamic, we can reassign a new value with other type

console.log(example)
// example() // will not work, as no function example() exists now

// So as dynamic types are avaiable, we should use const
// as much as possible, not to reassign values

const eazyFunc = () => {
    console.log('\nArrow type function')
}
eazyFunc() // Arrow type for function representation

// 'use strict' dont allow using unannounced variables in our code