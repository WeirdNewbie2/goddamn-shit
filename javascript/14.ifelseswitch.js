/*
if (something happened [must be true]) {
    do something
}


if (something happened [must be true]) {
    do something
} else {
    do another action
}


if (something happened [must be true]) {
    do something
} else if (something happened [must be true]) {
    do something
} else {
    do another action
}


if (something happened [must be true]) {
    do something
}

if (something happened [must be true]) {
    do something
}

if (something happened [must be true]) {
    do something
}
*/

const result = a => {
    let inp = Boolean(a == Number(a))
    if (Number(a) <= 0) {
        return 'Enter positive value'
    }
    if (inp === true) {
    return 'U gave ' + Number(a) + ' bucks'
    }
    return 'Incorrect input'
} // money trade system in games

console.log(result('-20'))


/*
switch (case) {
    case A:
        ....
        break
    
    case B:
        ....
        break
    
    default:
        console.log('exit')
}
*/