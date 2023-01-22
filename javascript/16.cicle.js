const myArray = [true, 2, 'abc', 3, 4]

const arrL = myArray.length

for (i = 0; i < arrL; i++) {
    console.log(myArray[i]) // true 2 abc 3 4
}

myArray.forEach ( (i) => {
    console.log (i)
})


let j = 0
while (j < arrL) {
    console.log (Boolean(myArray[j]))
    j++
}

let k = 0
do {
    console.log (!Boolean(myArray[k]))
    k++
}
while ( k < arrL)


const myObject = { // option: value
    first: 'string',
    second: 123,
    third: true
}
for ( const option in myObject) {
    console.log(option + ': ' + myObject[option])
}

Object.keys(myObject).forEach ( option => {
    console.log(option)
})