// Lets talk more about objects

const myObject = { // option: value
    first: 'string',
    second: 123,
    third: true
}

const otherObject = myObject // link to myObject`s options

console.log(myObject) //shows all object options
// { first: 'string', second: 123, third: true }

console.log(myObject.second)
// 123

console.log(otherObject.first)
// string

otherObject.third = false // reassigning by other object
console.log(myObject.third)
// false

myObject.third = true
console.log(myObject.third)
// true

myObject.fourth = 'new value' // adding a new option
console.log(myObject)
// { first: 'string', second: 123, third: true, fourth: 'new value' }

delete myObject.second // deleting an option
console.log(otherObject)
// { first: 'string', third: true, fourth: 'new value' }

// ========== [NEW BLOCK] ==========

myObject ['second'] = 456 // new option in object
console.log(myObject.second)
// 456

const newBigOption = 'settings' // short option assignment
myObject[newBigOption] = 'edited'
console.log(myObject)
// { first: 'string', third: true, fourth: 'new value', second: 456, settings: 'edited'}

// ========== [NEW BLOCK] ==========

const multiObject = {
    value1: 123456,
    value2: {
        one: 'string',
        two: true
    }
}

console.log(multiObject.value2.one)
// string

delete multiObject.value2.one // or delete multiObject.value2['one']
console.log(multiObject)
// { value1: 123456, value2: { two: true } }

const userName = 'Username'
const userPass = 123456

const userProfile = {
    login: userName,
    pass: userPass,
    isAuth: true
}
console.log(userProfile)
// { login: 'Username', pass: 123456, isAuth: true }

const value = true

const testObject = {
    value // value: value, shortened values must be placed in the start
}
console.log(testObject.value)
// true

// ========== [NEW BLOCK: METHONDS] ==========
// still work with testObject, create a function inside it

testObject.success = function () {
    console.log('Welcome')
}
testObject.success()
// Welcome
console.log(testObject)
// { value: true, success: [Function (anonymous)] }

const funcObject = {
    func () {
        console.log('im short')
    }
}
funcObject.func()
// im short