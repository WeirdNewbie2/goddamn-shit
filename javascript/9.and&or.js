// one && two
// ignores 'two' if 'one' is false

let a = true
let b = false
console.log(a && b) // false

let c = undefined
let d = true
console.log(c && d) // undefined

let e = true
let f = 5
console.log(e && f) // 5

let g = false
let j = false
console.log(g && j) // false

// one || two
// ignores 'two' if 'one' is true

let aa = true
let bb = false
console.log(aa || bb) // true

let cc = undefined
let dd = true
console.log(cc || dd) // true

let ee = true
let ff = 5
console.log(ee || ff) // true

let gg = false
let jj = true
console.log(gg || jj) // true

let jump = 10
console.log(jump) // 10
console.log('\n')
console.log(jump && fin) // undefined