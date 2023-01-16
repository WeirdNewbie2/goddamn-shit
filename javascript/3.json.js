const userName = 'Username'
const userPass = 123456

const userProfile = {
    login: userName,
    pass: userPass,
    isAuth: {
        checkResult: true
    }
}

let result = JSON.stringify(userProfile)
console.log(result);
// {"login":"Username","pass":123456,"isAuth":{"checkResult":true}}

let back = JSON.parse(result)
console.log(back)
// { login: 'Username', pass: 123456, isAuth: { checkResult: true } }
