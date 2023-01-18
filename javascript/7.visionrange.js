// variables can be global or local
// local variables can have same name as global, but have different value
// local variables are used instead of global in counting if variable is announced locally

let a
let b

function adding () {
    let b
    a = true
    b = 10
    console.log(b) // 10
}
adding()

console.log(a) // true
console.log(b) // undefined

const number = 5

function my () {
    function inner () {
        console.log(number)
    }
    inner() // 5
    const final = inner()
    return final
}
my() // undefined, if no return is inside {}, otherwise 5

