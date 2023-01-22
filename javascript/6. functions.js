// function name() {}
// functions must be named according to their actions
// one function for one action
// dont change outer objects using fuctions, create a copy of object to edit it instead
// clear functions dont edit any global values

function sum(a, b) {
    let c = a + b
    return c 
}

let adding = sum(5, 2)
console.log(adding) // 7


const newUser = {
    name: 'user',
    age: 20
}

function ageIncreased (incFunc) {
    incFunc.age += 1
    return incFunc
} // not recommended

ageIncreased (newUser)
console.log(newUser) // { name: 'user', age: 21 }


function increasedAge (user) {
    const copiedUser = Object.assign({}, user)
    copiedUser.age += 5
    return copiedUser
}

const updatedUser = increasedAge (newUser)
console.log(updatedUser) // { name: 'user', age: 26 }
console.log(newUser) // { name: 'user', age: 21 }


// callback fuctions
let root = false

if (root == false) {
    console.log('denied') // denied
}

function admin () {
    newRoot = true
    return newRoot
}

function login (admin) {
    admin()
    return newRoot
}
const logResult = admin()
console.log(logResult) // true

const notWork = login(admin)
console.log(notWork) // true
if (logResult == true) {
    console.log('welcome') // welcome
}

// string function

const ffFunc = (a,b = 2) => {
    let c
    a = a+1
    c = a + b
    return c
}
console.log(ffFunc(5)) // 8